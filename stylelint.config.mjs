/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-hudochenkov/order'],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': null,
  },
  overrides: [
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
    },
  ],
};
