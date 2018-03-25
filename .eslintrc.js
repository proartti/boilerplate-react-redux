module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:lodash-fp/recommended', 'airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'lodash-fp', 'prettier'],
  settings: {
    'import/resolver': {
      webpack: {
        config: './tools/webpack/config.babel.js'
      }
    }
  },
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true
  },
  rules: {
    'global-require': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'function-paren-newline': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['to']
      }
    ],
    'lodash-fp/use-fp': 'off',
    'lodash-fp/consistent-name': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  },
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __DEV__: true
  }
};
