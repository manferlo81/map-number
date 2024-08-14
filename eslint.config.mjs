import globals from 'globals';
import js from '@eslint/js';
import { config, configs as typescriptConfigs } from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

const rule = (options) => ['error', options];

const pluginRules = (pluginName, rules) => Object.keys(rules).reduce((output, ruleName) => {
  const pluginRuleName = `${pluginName}/${ruleName}`;
  const value = rules[ruleName];
  return { ...output, [pluginRuleName]: value };
}, {});

const eslintRules = {
  'no-useless-rename': 'error',
  'object-shorthand': 'error',
};

const stylisticRules = pluginRules('@stylistic', {
  semi: rule('always'),
  'quote-props': rule('as-needed'),
  'arrow-parens': rule('always'),
  'member-delimiter-style': rule({}),
  'no-extra-parens': rule('all'),
  'no-extra-semi': 'error',
  'padded-blocks': 'off',
});

const typescriptRules = pluginRules('@typescript-eslint', {
  'restrict-template-expressions': 'off',
});

const typescriptConfig = config(
  ...typescriptConfigs.strictTypeChecked,
  ...typescriptConfigs.stylisticTypeChecked,
  { languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: process.cwd() } } },
  { files: ['*.{js,cjs,mjs}'], ...typescriptConfigs.disableTypeChecked },
);

export default config(
  { ignores: ['dist', 'coverage'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  js.configs.recommended,
  ...typescriptConfig,
  stylistic.configs['recommended-flat'],
  { rules: { ...eslintRules, ...stylisticRules, ...typescriptRules } },
);
