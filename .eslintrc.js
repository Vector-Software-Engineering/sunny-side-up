module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0,
    'import/extensions': 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
};
