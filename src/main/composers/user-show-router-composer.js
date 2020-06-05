const UserShowRouter = require('../../presentation/routers/user-show-router')
const UserRepository = require('../../repositories/user')

module.exports = class UserCreateRouterComposer {
  static compose () {
    return new UserShowRouter(UserRepository)
  }
}
