const UserDeleteRouter = require('../../presentation/routers/user-delete-router')
const UserRepository = require('../../repositories/user')

module.exports = class UserCreateRouterComposer {
  static compose () {
    return new UserDeleteRouter(UserRepository)
  }
}
