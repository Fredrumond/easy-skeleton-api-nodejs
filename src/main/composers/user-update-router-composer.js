const UserUpdateRouter = require('../../presentation/routers/user-update-router')
const EmailValidator = require('../../utils/helpers/email-validator')
const PasswordValidator = require('../../utils/helpers/password-validator')
const UserRepository = require('../../repositories/user')

module.exports = class UserUpdateRouterComposer {
  static compose () {
    const emailValidator = new EmailValidator()
    const passwordValidator = new PasswordValidator()
    return new UserUpdateRouter(emailValidator, passwordValidator, UserRepository)
  }
}
