const HttpResponse = require('../helpers/http-response')

module.exports = class UserCreateRouter {
  constructor (userRepository) {
    this.userRepository = userRepository
  }

  async route (httpRequest) {
    const users = await this.userRepository.getAll()
    return HttpResponse.ok(users)
  }
}
