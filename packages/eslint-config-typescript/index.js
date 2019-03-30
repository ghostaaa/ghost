module.exports = {
  plugins: ['typescript'],
  parserOptions: {
    parser: require.resolve('typescript-eslint-parser')
  },
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'strict': 'off'
  }
}
