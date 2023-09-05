/* eslint-env node */
module.exports = {
  root: true,

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],

  parserOptions: {
    ecmaVersion: 'latest'
  },

  rules: {
    'no-unused-vars': 1,
    'no-console': 'warn',
    'no-debugger': 'warn',
    'space-before-function-paren': [1, 'never'],
    'vue/html-self-closing': 0,
    'vue/multi-word-component-names': 'off'
  }
}
