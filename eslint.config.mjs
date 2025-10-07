import globals from 'globals';

import pluginJavascript from '@eslint/js';
import pluginStylistic from '@stylistic/eslint-plugin';
import { flatConfigs as pluginImportConfigs } from 'eslint-plugin-import-x';
import { config as defineConfig, configs as pluginTypescriptConfigs } from 'typescript-eslint';

// Constants

const PATTERN_JS = '**/*.{js,mjs,cjs}';
const PATTERN_TS = '**/*.{ts,mts,cts}';

const FILES_TS_ONLY = [PATTERN_TS];
const FILES_ALL = [PATTERN_JS, PATTERN_TS];

// Plugin Javascript

const configPluginJavascript = defineConfig({
  rules: ruleNormalizer()({
    'no-useless-rename': 'on',
    'object-shorthand': 'on',
    'no-useless-concat': 'on',
    'prefer-template': 'on',
    eqeqeq: 'smart',
  }),
  files: FILES_ALL,
  extends: [
    pluginJavascript.configs.recommended,
  ],
});

// Plugin Typescript

const configPluginTypescript = defineConfig({
  rules: ruleNormalizer({ plugin: '@typescript-eslint' })({
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
  files: FILES_TS_ONLY,
  languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } },
  extends: [
    pluginTypescriptConfigs.strictTypeChecked,
    pluginTypescriptConfigs.stylisticTypeChecked,
  ],
});

// Plugin Import

const configPluginImport = defineConfig({
  rules: ruleNormalizer({ plugin: 'import-x' })({
    'consistent-type-specifier-style': 'on',
    'no-useless-path-segments': 'on',
    'no-absolute-path': 'on',
    'no-cycle': 'on',
    'no-nodejs-modules': 'on',
  }),
  files: FILES_ALL,
  extends: [
    pluginImportConfigs.recommended,
    pluginImportConfigs.typescript,
  ],
});

// Plugin Stylistic

const configPluginStylistic = defineConfig({
  rules: ruleNormalizer({ plugin: '@stylistic' })({
    indent: ['on', 2],
    quotes: 'single',
    'linebreak-style': 'unix',
    'no-extra-parens': 'all',
    'no-extra-semi': 'on',
    'padded-blocks': 'off',
  }),
  files: FILES_ALL,
  extends: [
    pluginStylistic.configs.customize({
      semi: true,
      arrowParens: true,
      quoteProps: 'as-needed',
      braceStyle: '1tbs',
    }),
  ],
});

// Config

export default defineConfig(
  { ignores: ['dist', 'coverage'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  configPluginJavascript,
  configPluginTypescript,
  configPluginImport,
  configPluginStylistic,
);

// Helpers

function ruleNormalizer({ severity: defaultSeverity = 'error', plugin: pluginName } = {}) {

  const isDefaultSeverity = (ruleEntry) => ['error', 'warn', 1, 2].includes(ruleEntry);

  if (!isDefaultSeverity(defaultSeverity)) throw new TypeError('Invalid default severity');

  const resolveSeverity = (ruleEntry) => {
    if (ruleEntry === 'on' || ruleEntry === true) return [true, defaultSeverity];
    if (ruleEntry === false) return [true, 'off'];
    return [ruleEntry === 'off' || ruleEntry === 0 || isDefaultSeverity(ruleEntry), ruleEntry];
  };

  const normalizeRuleEntry = (ruleEntry) => {

    const [isValidSeverity, severity] = resolveSeverity(ruleEntry);
    if (isValidSeverity) return severity;

    if (Array.isArray(ruleEntry)) {
      if (!ruleEntry.length) return defaultSeverity;
      const [first, ...rest] = ruleEntry;
      const [isValidSeverity, severity] = resolveSeverity(first);
      if (isValidSeverity) return [severity, ...rest];
      return [defaultSeverity, ...ruleEntry];
    }

    return [defaultSeverity, ruleEntry];
  };

  const createRuleNormalizer = (normalizeObjectEntry) => {
    return (rules) => {
      const entries = Object.entries(rules);
      const entriesNormalized = entries.map(normalizeObjectEntry);
      return Object.fromEntries(entriesNormalized);
    };
  };

  if (!pluginName) {
    return createRuleNormalizer(
      ([ruleName, ruleEntry]) => [
        ruleName,
        normalizeRuleEntry(ruleEntry),
      ],
    );
  }

  const pluginPrefix = `${pluginName}/`;

  const normalizeRuleName = (ruleName) => {
    if (ruleName.startsWith(pluginPrefix)) return ruleName;
    return `${pluginPrefix}${ruleName}`;
  };

  return createRuleNormalizer(
    ([ruleName, ruleEntry]) => [
      normalizeRuleName(ruleName),
      normalizeRuleEntry(ruleEntry),
    ],
  );

}
