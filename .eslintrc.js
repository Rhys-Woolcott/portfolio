module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 extends: [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
 ],
 parser: '@typescript-eslint/parser',
 parserOptions: {
  ecmaFeatures: {
   jsx: true,
  },
  ecmaVersion: 12,
  sourceType: 'module',
 },
 plugins: ['react', '@typescript-eslint'],
 rules: {
  indent: ['error', 1],
  'linebreak-style': ['error', 'unix'],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error'],
  'max-len': ['warn', { code: 80 }],
 },
};
