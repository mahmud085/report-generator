module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-named-as-default-member': 0,
    'no-console': 0,
    '@typescript-eslint/indent': ['error', 2],
  },
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  overrides: [
    {
      files: [
        '*.test.ts',
        '*.steps.ts',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }]
      },
    },
  ],
};
