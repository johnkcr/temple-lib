module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    // turned off (might want to fix these)
    '@typescript-eslint/no-explicit-any': 0,

    // someone fix these no shadow lints
    // 'no-shadow': 2,

    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 0,
    'no-console': 0,
    'linebreak-style': ['error', 'unix'],
    'default-case': 2,
    'no-var': 2,
    'no-undef': 2,
    'no-unreachable': 2,
    'no-empty-pattern': 2,
    'no-empty-function': 2,
    'no-caller': 2,
    'no-eval': 2,
    'no-floating-decimal': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-param-reassign': 2,
    'no-return-assign': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-escape': 2,
    'no-with': 2,
    'no-shadow-restricted-names': 2,
    camelcase: 2,
    'comma-dangle': 2,
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-multi-assign': 2,
    'no-tabs': 2,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'no-duplicate-imports': 2,
    'getter-return': 2,
    'accessor-pairs': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'new-parens': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-proto': 2,
    'no-trailing-spaces': 2,
    'wrap-iife': [2, 'any'],
    'prefer-const': 2,
    'yield-star-spacing': [2, 'both'],
    'no-new-object': 2,
    'no-new-require': 2,
    'no-iterator': 2,
    'no-octal-escape': 2,
    'func-call-spacing': 2,
    'no-implied-eval': 2,
    'no-path-concat': 2,
    'no-useless-computed-key': 2,
    'space-infix-ops': 2,
    yoda: [2, 'never'],
    'eol-last': 2,
    'space-before-blocks': 2,
    'no-self-compare': 2,
    'no-lone-blocks': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-sequences': 2,
    'no-useless-constructor': 2,
    'no-throw-literal': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    'no-label-var': 2,
    'no-whitespace-before-property': 2,
    'array-bracket-spacing': 2,
    'dot-location': [2, 'property'],
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    'no-labels': 2,
    'padded-blocks': [2, 'never'],
    'template-curly-spacing': 2,
    'comma-style': 2,
    curly: 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ],
    'keyword-spacing': 2,
    'arrow-spacing': 2,
    'comma-spacing': 2,
    eqeqeq: 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'generator-star-spacing': 2,
    'handle-callback-err': [2, '^(err|error)$'],
    'key-spacing': 2,
    'new-cap': 2,
    'operator-linebreak': 2,
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ]
    // 'no-use-before-define': 2,
    // semi: [2, 'never'],
    // conflicts with prettier?
    // 'no-extra-parens': [
    //   2,
    //   'all',
    //   {
    //     nestedBinaryExpressions: false
    //   }
    // ], 'no-alert': 2,
    // 'no-unused-vars': [
    //   2,
    //   {
    //     vars: 'all',
    //     args: 'none'
    //   }
    // ],
  }
};
