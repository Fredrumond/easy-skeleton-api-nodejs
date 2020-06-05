const HttpResponse = require('../helpers/http-response')

module.exports = class UserCreateRouter {
  constructor (userRepository) {
    this.userRepository = userRepository
  }

  async route (httpRequest) {
    const { id } = httpRequest.params

    const user = await this.userRepository.findByPk(id)

    if (user) {
      return HttpResponse.ok(user)
    }

    return HttpResponse.notFound('User not found!')
  }
}
