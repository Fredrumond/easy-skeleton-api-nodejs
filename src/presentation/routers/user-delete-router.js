const HttpResponse = require('../helpers/http-response')

module.exports = class UserCreateRouter {
  constructor (userRepository) {
    this.userRepository = userRepository
  }

  async route (httpRequest) {
    const { id } = httpRequest.params

    const user = await this.userRepository.findByPk(id)

    if (user) {
      await this.userRepository.destroy(user)
      return HttpResponse.ok(user, 'User deleted successfully!')
    }

    return HttpResponse.notFound('User not found!')
  }
}
