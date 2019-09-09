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
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
    'src/**/*.ts': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
