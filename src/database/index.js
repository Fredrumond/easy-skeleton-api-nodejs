import Sequelize from 'sequelize'

import databaseConfig from '../config/database'

import Users from '../app/models/User'

const models = [Users]
const env = process.env.NODE_ENV || 'development'
const config = databaseConfig[env]

class Database {
  constructor () {
    this.init()
  }

  init () {
    this.connection = new Sequelize(config)

    models.map(model => model.init(this.connection))
    models.map(
      model => model.associate && model.associate(this.connection.models)
    )
  }
}

export default new Database()
