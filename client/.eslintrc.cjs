/* eslint-env node */
module.exports = {
  extends: ['@antfu', '@unocss'],
  rules: {
    'no-sequences': 'off',
    'no-console': 'off',
    'no-eval': 'off',
    'no-async-promise-executor': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'object-property-newline': 'off',
    'object-curly-newline': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/no-export-in-script-setup': 'off',
  },
}
