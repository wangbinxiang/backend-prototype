module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  env: {
    node: true
  },
  plugins: ['typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-unused-vars': 'off',
    // 'typescript/no-namespace': [
    //   'error',
    //   {
    //     allowDeclarations: true,
    //     allowDefinitionFiles: true
    //   }
    // ],
    semi: ['error', 'never'],
    indent: [
      // 两个空格
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    complexity: [
      // 圈复杂度最大为10
      'error',
      {
        max: 10
      }
    ],
    'max-lines': [
      'error',
      {
        // 单文件最大行数为1000
        max: 1000,
        skipComments: true
      }
    ],
    // radix: 'off', // parseInt 不是必须传入第二个参数
    'max-statements-per-line': [
      // 一行只能有一条语句
      'error',
      {
        max: 1
      }
    ]
  }
}
