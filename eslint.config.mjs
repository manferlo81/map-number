import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import { config, configs as typescriptConfigs } from 'typescript-eslint';

const eslintRules = normalizeRules({
  'no-useless-rename': 'error',
  'object-shorthand': 'error',
  'no-useless-concat': 'error',
  'prefer-template': 'error',
});

const stylisticRules = normalizeRules('@stylistic', {
  quotes: 'single',
  'linebreak-style': 'unix',
  'no-extra-parens': 'all',
  'no-extra-semi': 'error',
  'padded-blocks': 'off',
});

const typescriptRules = normalizeRules('@typescript-eslint', {
  'array-type': {
    default: 'array-simple',
    readonly: 'array-simple',
  },
  'restrict-template-expressions': 'off',
});

const stylisticConfig = stylistic.configs.customize({
  indent: 2,
  semi: true,
  arrowParens: true,
  quoteProps: 'as-needed',
  braceStyle: '1tbs',
});

const typescriptConfig = config(
  ...typescriptConfigs.strictTypeChecked,
  ...typescriptConfigs.stylisticTypeChecked,
  { languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: process.cwd() } } },
  { files: ['**/*.{js,cjs,mjs}'], ...typescriptConfigs.disableTypeChecked },
);

export default config(
  { files: ['**/*.{js,cjs,mjs,ts}'] },
  { ignores: ['dist', 'coverage'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  js.configs.recommended,
  stylisticConfig,
  ...typescriptConfig,
  { rules: { ...eslintRules, ...stylisticRules, ...typescriptRules } },
);

function normalizeRuleEntry(entry) {
  if (Array.isArray(entry) || ['error', 'warn', 'off'].includes(entry)) return entry;
  return ['error', entry];
}

function normalizeRulesObject(rules, pluginName) {
  const entries = Object.entries(rules);
  if (!pluginName) return Object.fromEntries(
    entries.map(
      ([ruleName, ruleEntry]) => [ruleName, normalizeRuleEntry(ruleEntry)],
    ),
  );
  const pluginPrefix = `${pluginName}/`;
  const normalizeRuleName = (ruleName) => {
    if (ruleName.startsWith(pluginPrefix)) return ruleName;
    return `${pluginPrefix}${ruleName}`;
  };
  return Object.fromEntries(
    entries.map(
      ([ruleName, ruleEntry]) => [normalizeRuleName(ruleName), normalizeRuleEntry(ruleEntry)],
    ),
  );
}

function normalizeRules(pluginOrRule, rules) {
  if (!rules) return normalizeRulesObject(pluginOrRule);
  return normalizeRulesObject(rules, pluginOrRule);
}
