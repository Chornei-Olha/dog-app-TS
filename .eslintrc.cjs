module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked', '@typescript-eslint/stylistic-type-checked', 'plugin:react-hooks/recommended', 'airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'storybook-static', '*.cjs', 'commitlintrc.json'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  overrides: [
    {
      files: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.test.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'react/no-props-spreading': 0
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
  rules: {
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
    '@typescript-eslint/no-explicit-any': 1,
    'prettier/prettier': [
      'warn',
      {
        parser: 'typescript'
      }
    ]
  }
};
