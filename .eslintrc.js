// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true,
    },
    extends: ['react-app','airbnb', "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
    plugins: [
     // react, jsx-a11y, import are required in eslint-config-react-app, so do nothing
    ],
    'settings': {
      'import/extensions': ['.js', '.es', '.jsx'],
    },
    'rules': {
      'import/extensions': ['error', 'always', {
        'js': 'never',
        'es': 'never',
        'jsx': 'never'
      }],

      "react/jsx-indent": ['error', 4],

      "react/jsx-indent-props": ['warn', 2],

      // class-methods-use-this, https://eslint.org/docs/rules/class-methods-use-this
      'class-methods-use-this': 'off',

      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      // suggest using template literals instead of string concatenation
      // http://eslint.org/docs/rules/prefer-template
      'prefer-template': 'warn',

      // disallow unnecessary string escaping
      // http://eslint.org/docs/rules/no-useless-escape
      'no-useless-escape': 'off',


      // use rest parameters instead of arguments
      // http://eslint.org/docs/rules/prefer-rest-params
      'prefer-rest-params': 'off',

      // suggest using the spread operator instead of .apply()
      // http://eslint.org/docs/rules/prefer-spread
      'prefer-spread': 'warn',

      // disallow arrow functions where they could be confused with comparisons
      // http://eslint.org/docs/rules/no-confusing-arrow
      'no-confusing-arrow': 'off',

      // disallow use of unary operators, ++ and --
      // http://eslint.org/docs/rules/no-plusplus
      'no-plusplus': 'off',

      // disallow dangling underscores in identifiers
      'no-underscore-dangle': ['warn', { allowAfterThis: false }],

      // enforce one true brace style
      'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],

      // encourages use of dot notation whenever possible
      'dot-notation': ['warn', { allowKeywords: true }],
      // 推荐解构赋值
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      'prefer-destructuring': 'warn',
      'no-console': 'off',
      'indent': 'warn',
      'function-paren-newline': 'warn',
      'object-curly-newline': 'off',
      'camelcase': 'off',
      // ------ React
      'react/jsx-filename-extension': 'off',
      'react/prefer-stateless-function': 'warn',
      'react/forbid-prop-types': 'off',
      'react/require-default-props': 'warn',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/href-no-hash': 'off',
      'react/jsx-closing-tag-location': 'off',
      "react/display-name": 'off',
      "no-underscore-dangle": ["warn", { "allow": ["__commonData"], "allowAfterThis": true }]
    }
  }