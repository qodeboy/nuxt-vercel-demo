const isProductionBuild = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  reportUnusedDisableDirectives: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:yml/standard',
    'plugin:yml/prettier',
    'plugin:markdown/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'unicorn',
    'promise',
    'sonarjs',
    'eslint-comments',
    'yml',
    'markdown',
    'vue',
    'prettier',
  ],
  rules: {
    // <editor-fold desc="core">
    'no-console': isProductionBuild ? ['error', { allow: ['warn', 'error'] }] : ['off'],
    'no-debugger': isProductionBuild ? ['error'] : ['off'],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-void': ['error', { allowAsStatement: true }],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: ['descriptor'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*', 'node:process', 'process'],
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
        message: 'setTimeout must always be invoked with two arguments.',
      },
    ],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'arrow-body-style': ['error', 'always'],
    'quote-props': ['error', 'consistent-as-needed'],
    'comma-dangle': [
      'error',
      {
        // eslint-disable-next-line sonarjs/no-duplicate-string
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'class-methods-use-this': ['off'],
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    'unused-imports/no-unused-imports': ['error'],
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    // </editor-fold>

    // <editor-fold desc="typescript-eslint">
    '@typescript-eslint/no-namespace': ['off'],
    '@typescript-eslint/no-unsafe-enum-comparison': ['off'],
    '@typescript-eslint/no-duplicate-enum-values': ['off'],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
    ],
    // </editor-fold>

    // <editor-fold desc="import">
    'import/prefer-default-export': ['off'],
    // </editor-fold>

    // <editor-fold desc="sonarjs">
    'sonarjs/no-all-duplicated-branches': ['warn'],
    'sonarjs/no-extra-arguments': ['warn'],
    'sonarjs/no-identical-conditions': ['warn'],
    'sonarjs/no-identical-expressions': ['warn'],
    'sonarjs/no-one-iteration-loop': ['warn'],
    'sonarjs/cognitive-complexity': ['warn', 40],
    'sonarjs/max-switch-cases': ['warn', 15],
    'sonarjs/no-collapsible-if': ['warn'],
    'sonarjs/no-collection-size-mischeck': ['warn'],
    'sonarjs/no-duplicate-string': ['off', 4],
    'sonarjs/no-duplicated-branches': ['warn'],
    'sonarjs/no-identical-functions': ['warn'],
    'sonarjs/no-inverted-boolean-check': ['warn'],
    'sonarjs/no-redundant-boolean': ['warn'],
    'sonarjs/no-redundant-jump': ['warn'],
    'sonarjs/no-same-line-conditional': ['warn'],
    'sonarjs/no-small-switch': ['warn'],
    'sonarjs/no-unused-collection': ['warn'],
    'sonarjs/no-useless-catch': ['warn'],
    'sonarjs/prefer-immediate-return': ['warn'],
    'sonarjs/prefer-object-literal': ['warn'],
    'sonarjs/prefer-single-boolean-return': ['off'],
    // </editor-fold>

    // <editor-fold desc="unicorn">
    'unicorn/prefer-top-level-await': ['off'],
    'unicorn/prevent-abbreviations': ['off'],
    'unicorn/no-negated-condition': ['off'],
    'unicorn/prefer-module': ['off'],
    // </editor-fold>
  },
  overrides: [
    {
      files: [
        // These pages are not used directly by users so they can have one-word names.
        '**/pages/**/*.{js,ts,jsx,tsx,vue}',
        '**/layouts/**/*.{js,ts,jsx,tsx,vue}',
        '**/app.{js,ts,jsx,tsx,vue}',
        '**/error.{js,ts,jsx,tsx,vue}',
        // These files should have multiple words in their names as they are within subdirectories.
        '**/components/*/**/*.{js,ts,jsx,tsx,vue}',
      ],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
    {
      // Pages and layouts are required to have a single root element if transitions are enabled.
      files: ['**/pages/**/*.{js,ts,jsx,tsx,vue}', '**/layouts/**/*.{js,ts,jsx,tsx,vue}'],
      rules: { 'vue/no-multiple-template-root': 'error' },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'spaced-comment': 'off',
      },
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        'import/no-unresolved': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'antfu/no-cjs-exports': 'off',
        'antfu/no-ts-export-equal': 'off',
        'n/prefer-global/process': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
  ],
};
