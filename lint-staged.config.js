module.exports = {
  '**/*.ts?(x)': () => ['yarn ts:check', 'yarn eslint'],
};
