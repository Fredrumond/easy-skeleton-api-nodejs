const UserCreateRouter = require('../../presentation/routers/user-create-router')
const EmailValidator = require('../../utils/helpers/email-validator')
const PasswordValidator = require('../../utils/helpers/password-validator')
const UserRepository = require('../../repositories/user')

module.exports = class UserCreateRouterComposer {
  static compose () {
    const emailValidator = new EmailValidator()
    const passwordValidator = new PasswordValidator()
    return new UserCreateRouter(emailValidator, passwordValidator, UserRepository)
  }
}
