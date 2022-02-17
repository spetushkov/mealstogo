module.exports = {
  roots: ['<rootDir>/src'],
  transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest' },
  testPathIgnorePatterns: ['./node_modules/'],
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  errorOnDeprecated: true,
  collectCoverageFrom: ['<rootDir>/src/app/**/*.{js,ts}'],
  setupFiles: ['<rootDir>/src/test/jest.setup.js'],
  setupFilesAfterEnv: ['./src/test/jest.setup-after.js'],
  runner: 'groups', // jest-runner-groups,
  globals: {},
};
