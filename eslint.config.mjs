import pluginJavascript from '@eslint/js';
import pluginStylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import { config, configs as pluginTypescriptConfigs } from 'typescript-eslint';

const javascriptPluginConfig = config(
  pluginJavascript.configs.recommended,
  normalizeRulesConfig({
    'no-useless-rename': 'error',
    'object-shorthand': 'error',
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    eqeqeq: 'smart',
  }),
);

const stylisticPluginConfig = config(
  pluginStylistic.configs.customize({
    indent: 2,
    semi: true,
    arrowParens: true,
    quoteProps: 'as-needed',
    braceStyle: '1tbs',
  }),
  normalizeRulesConfig('@stylistic', {
    quotes: 'single',
    'linebreak-style': 'unix',
    'no-extra-parens': 'all',
    'no-extra-semi': 'error',
    'padded-blocks': 'off',
  }),
);

const typescriptPluginConfig = config(
  { languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } } },
  pluginTypescriptConfigs.strictTypeChecked,
  pluginTypescriptConfigs.stylisticTypeChecked,
  normalizeRulesConfig('@typescript-eslint', {
    'array-type': { default: 'array-simple', readonly: 'array-simple' },
    'restrict-template-expressions': {
      allowNumber: true,
      allowNever: false,
      allowBoolean: false,
      allowNullish: false,
      allowAny: false,
      allowRegExp: false,
      allowArray: false,
    },
  }),
  {
    ...pluginTypescriptConfigs.disableTypeChecked,
    files: ['**/*.{js,mjs,cjs}'],
  },
);

export default config(
  { ignores: ['dist', 'coverage'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  javascriptPluginConfig,
  stylisticPluginConfig,
  typescriptPluginConfig,
);

function normalizeRulesConfig(pluginName, rules) {
  if (!rules && pluginName) return normalizeRulesConfig(null, pluginName);
  const entries = Object.entries(rules);
  if (!entries.length) return {};
  const normalizeEntry = createEntryNormalizer(pluginName);
  const entriesNormalized = entries.map(normalizeEntry);
  const rulesNormalized = Object.fromEntries(entriesNormalized);
  return { rules: rulesNormalized };
}

function createEntryNormalizer(pluginName) {
  if (!pluginName) return ([ruleName, ruleEntry]) => [ruleName, normalizeRuleEntry(ruleEntry)];
  const normalizeRuleName = createPluginRuleNameNormalizer(pluginName);
  return ([ruleName, ruleEntry]) => [normalizeRuleName(ruleName), normalizeRuleEntry(ruleEntry)];
}

function createPluginRuleNameNormalizer(pluginName) {
  const pluginPrefix = `${pluginName}/`;
  return (ruleName) => {
    if (ruleName.startsWith(pluginPrefix)) return ruleName;
    return `${pluginPrefix}${ruleName}`;
  };
}

function normalizeRuleEntry(entry) {
  if (Array.isArray(entry)) return entry;
  if (['error', 'off', 'warn'].includes(entry)) return entry;
  return ['error', entry];
}
