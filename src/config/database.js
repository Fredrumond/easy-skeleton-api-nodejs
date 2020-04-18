module.exports = {
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
};
