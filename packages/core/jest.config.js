module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./test/setup-jest-env.js'],
  testMatch: ['**/test/**/*.test.[jt]s?(x)'],
  transformIgnorePatterns: [`/node_modules/.pnpm/(?!nanoid)`],
};
