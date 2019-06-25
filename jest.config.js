module.exports = {
  roots: [
    '<rootDir>/src/',
  ],
  transform: {
    '^.+\\.ts$': 'babel-jest',
  },
  moduleFileExtensions: [
    'ts',
    'js',
  ],
  testMatch: [
    '**/*.test.ts',
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 0,
    },
  },
};
