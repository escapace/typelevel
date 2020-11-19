module.exports = {
  'package.json': [
    'syncpack-format --source',
    'syncpack-set-semver-ranges --dev --source'
  ],
  'src/**/*.ts?(x)': ['eslint --fix', 'prettier --write'],
  'test/**/*.ts?(x)': ['eslint -c ./test/.eslintrc.js --fix', 'prettier --write']
}
