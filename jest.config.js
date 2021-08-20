module.exports = {
  preset: 'ts-jest',
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    }
  },
  globalSetup: "<rootDir>/tests/global-setup.ts",
  globalTeardown: "<rootDir>/tests/global-teardown.ts",
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
    "**/tests/**/*.test.(ts|js)"
  ],
  testEnvironment: "node"
};
