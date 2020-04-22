module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/src/database/migrations/**',
    '!**/src/database/seeders/**',
    '!**/src/app.js',
    '!**/src/routes.js',
    '!**/src/server.js'
  ]
}
