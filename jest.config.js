module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverageFrom: [
    'src/**',
    '!src/database/migrations/**',
    '!src/database/seeders/**',
    '!src/main/server.js'
  ],
  coverageDirectory: './coverage/',
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.test.js?(x)',
    '**/tests/**/*.spec.js?(x)'
  ]
}
