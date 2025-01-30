module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],  // Ignore compiled files
    globals: {
      'ts-jest': {
        isolatedModules: true,
      },
    },
  };
  