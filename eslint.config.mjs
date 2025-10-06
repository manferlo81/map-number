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
    'no-useless-rename': 'error',
    'object-shorthand': 'error',
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    eqeqeq: 'smart',
  }),
  files: FILES_ALL,
  extends: [
    pluginJavascript.configs.recommended,
  ],
});

// Plugin Typescript

const typescriptPluginConfig = defineConfig({
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
    'consistent-type-specifier-style': 'error',
    'no-useless-path-segments': 'error',
    'no-absolute-path': 'error',
    'no-cycle': 'error',
    'no-nodejs-modules': 'error',
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
    indent: ['error', 2],
    quotes: 'single',
    'linebreak-style': 'unix',
    'no-extra-parens': 'all',
    'no-extra-semi': 'error',
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
  configPluginImport,
  configPluginStylistic,
  typescriptPluginConfig,
);

// Helpers

function ruleNormalizer({ plugin: pluginName } = {}) {

  function normalizeRuleEntry(entry) {
    if (Array.isArray(entry)) return entry;
    if (['error', 'off', 'warn'].includes(entry)) return entry;
    return ['error', entry];
  }

  function createRuleNormalizer(normalizeObjectEntry) {
    return (rules) => {
      const entries = Object.entries(rules);
      const entriesNormalized = entries.map(normalizeObjectEntry);
      return Object.fromEntries(entriesNormalized);
    };
  }

  if (!pluginName) {
    return createRuleNormalizer(
      ([ruleName, ruleEntry]) => [
        ruleName,
        normalizeRuleEntry(ruleEntry),
      ],
    );
  }

  const pluginPrefix = `${pluginName}/`;

  const normalizeRuleName = (key) => {
    if (key.startsWith(pluginPrefix)) return key;
    return `${pluginPrefix}${key}`;
  };

  return createRuleNormalizer(
    ([ruleName, ruleEntry]) => [
      normalizeRuleName(ruleName),
      normalizeRuleEntry(ruleEntry),
    ],
  );

}
