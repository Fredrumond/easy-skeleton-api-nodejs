module.exports = class HttpResponse {
  static ok (body) {
    return {
      statusCode: 200,
      body: {
        body
      }
    }
  }

  static created (body) {
    return {
      statusCode: 201,
      body: {
        body
      }
    }
  }

  static badRequest (error) {
    return {
      statusCode: 400,
      body: {
        error: error.message
      }
    }
  }

  static notFound (error) {
    return {
      statusCode: 404,
      body: {
        error: error.message
      }
    }
  }
}
