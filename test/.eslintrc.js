const path = require('path')

module.exports = {
  plugins: ['@typescript-eslint', 'no-null'],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    project: path.join(__dirname, 'tsconfig.json')
  },
  extends: [
    'escapace'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/array-type': 0,
    '@typescript-eslint/no-invalid-void-type': 0
  }
}
