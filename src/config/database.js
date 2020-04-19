module.exports = {
  development: {
    dialect: 'mysql',
    host: process.env.DB_DEV_SERVER,
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV_NAME,
    logging: true,
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true
    }
  },
  test: {
    dialect: 'mysql',
    host: process.env.DB_TEST_SERVER,
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PASS,
    database: process.env.DB_TEST_NAME,
    logging: true,
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true
    }
  },
  production: {
    dialect: 'mysql',
    host: process.env.DB_SERVER,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false,
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true
    }
  },
}
