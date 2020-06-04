const HttpResponse = require('../helpers/http-response')
const { MissingParamError, InvalidParamError } = require('../../utils/errors')

module.exports = class UserCreateRouter {
  constructor (emailValidator, passwordValidator, userRepository) {
    this.emailValidator = emailValidator
    this.passwordValidator = passwordValidator
    this.userRepository = userRepository
  }

  async route (httpRequest) {
    const { name, email, password, confPassword } = httpRequest.body

    if (!email) {
      return HttpResponse.badRequest(new MissingParamError('email'))
    }

    if (!this.emailValidator.isValid(email)) {
      return HttpResponse.badRequest(new InvalidParamError('email'))
    }

    if (!name) {
      return HttpResponse.badRequest(new MissingParamError('name'))
    }

    if (!password) {
      return HttpResponse.badRequest(new MissingParamError('password'))
    }

    if (!this.passwordValidator.isValid(password)) {
      return HttpResponse.badRequest(new InvalidParamError('Password must contain 6 characters or more'))
    }

    if (!confPassword) {
      return HttpResponse.badRequest(new MissingParamError('confPassword'))
    }

    if (password !== confPassword) {
      return HttpResponse.badRequest(new MissingParamError('Passwords do not match'))
    }

    const user = await this.userRepository.save(httpRequest.body)

    return HttpResponse.created(user, 'User successfully registered.')
  }
}
