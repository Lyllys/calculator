/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'vue'
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'vue/multi-word-component-names': 'off',
  },
};
