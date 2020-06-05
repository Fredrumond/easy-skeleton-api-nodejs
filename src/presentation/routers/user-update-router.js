const HttpResponse = require('../helpers/http-response')
const { MissingParamError, InvalidParamError } = require('../../utils/errors')

module.exports = class UserCreateRouter {
  constructor (emailValidator, passwordValidator, userRepository) {
    this.emailValidator = emailValidator
    this.passwordValidator = passwordValidator
    this.userRepository = userRepository
  }

  async route (httpRequest) {
    const { id } = httpRequest.params
    const { email, password, confPassword } = httpRequest.body

    const user = await this.userRepository.findByPk(id)

    if (user) {
      if (password) {
        if (!this.passwordValidator.isValid(password)) {
          return HttpResponse.badRequest(new InvalidParamError('Password must contain 6 characters or more'))
        }
        if (!confPassword) {
          return HttpResponse.badRequest(new MissingParamError('confPassword'))
        }

        if (password !== confPassword) {
          return HttpResponse.badRequest(new MissingParamError('Passwords do not match'))
        }
      }

      if (email) {
        if (!this.emailValidator.isValid(email)) {
          return HttpResponse.badRequest(new InvalidParamError('email'))
        }
      }

      const userUpdate = await this.userRepository.update(user, httpRequest.body)
      return HttpResponse.ok(userUpdate, 'User edited successfully!')
    }

    return HttpResponse.notFound('User not found!')
  }
}
