const UserIndexRouter = require('../../presentation/routers/user-index-router')
const UserRepository = require('../../repositories/user')

module.exports = class UserCreateRouterComposer {
  static compose () {
    return new UserIndexRouter(UserRepository)
  }
}
