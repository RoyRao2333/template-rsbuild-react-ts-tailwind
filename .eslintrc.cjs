module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    // Make prettier as the last item in the extends array, so that it has the opportunity to override other configs
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    // 因为默认的 eslint-plugin-import 只支持 js 和 jsx，对于 ts 和 tsx 需要加下面这两个配置，
    'import/parsers': {
      // 使用 TypeScript parser
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    // https://devrsi0n.com/articles/eslint-typescript-import-unsolve
    'import/resolver': {
      typescript: {
        directory: '**/*/tsconfig.json',
      },
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-no-leaked-render': 'warn',
    quotes: ['warn', 'single'],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    // 导入类型时需添加 type 修饰符
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
    'import/namespace': 'off',
  },
};
