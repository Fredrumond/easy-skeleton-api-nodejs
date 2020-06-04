const HttpResponse = require('./helpers/http-response')
const { MissingParamError } = require('../../utils/errors')

module.exports = class TesteController {
  async route (httpRequest) {
    const { email } = httpRequest.body
    if (!email) {
      return HttpResponse.badRequest(new MissingParamError('email'))
    }

    return HttpResponse.ok({ accessToken: '74hgfgftest' })
  }
}
