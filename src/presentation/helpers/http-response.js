module.exports = class HttpResponse {
  static ok (body, message) {
    return {
      statusCode: 200,
      body: {
        message: message,
        body
      }
    }
  }

  static created (body, message) {
    return {
      statusCode: 201,
      body: {
        message: message,
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

  static notFound (message) {
    return {
      statusCode: 404,
      body: {
        message: message
      }
    }
  }
}
