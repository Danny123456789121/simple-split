import importAlias from '@dword-design/eslint-plugin-import-alias';
import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import json from 'eslint-plugin-json';
import eslintPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

const reactConfig = {
  plugins: {
    react: react,
  },
  rules: {
    ...react.configs.flat.recommended.rules,
    'react/jsx-no-literals': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};

const simpleImportSortConfig = {
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignorePattern: '^(import .|.*tooltip=.)',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [],
      },
    ],
  },
};

const reactHooksConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: {
    'react-hooks': pluginReactHooks,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};

export default tseslint.config(
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  reactConfig,
  simpleImportSortConfig,
  reactHooksConfig,
  eslint.configs.recommended,
  eslintPrettierRecommended,
  importAlias.configs.recommended,
  json.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@dword-design/import-alias/prefer-alias': [
        'error',
        {
          alias: {
            '@': './src',
          },
        },
      ],
      'newline-before-return': 'error',
      curly: ['error', 'all'],
    },
  },
);
