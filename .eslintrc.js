module.exports = {
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
  },
  rules: {
    "arrow-body-style": "off",
    "linebreak-style": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen'
      ]
    }],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  }
};
