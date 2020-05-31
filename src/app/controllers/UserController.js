const { validPassword } = require('../../utils/ValidPassword')
const UserRepository = require('../../repositories/user')

const HttpResponse = require('./helpers/http-response')
const { MissingParamError, InvalidParamError } = require('../../utils/errors')

const EmailValidator = require('../../utils/helpers/email-validator')
const validEmail = new EmailValidator()
class UserController {
  async store (req, res) {
    const { name, email, password, confPassword } = req.body

    if (!email) {
      const response = HttpResponse.badRequest(new MissingParamError('email'))
      return res.status(response.statusCode).json(response.body)
    }

    if (!validEmail.isValid(email)) {
      const response = HttpResponse.badRequest(new InvalidParamError('email'))
      return res.status(response.statusCode).json(response.body)
    }

    if (!name) {
      const response = HttpResponse.badRequest(new MissingParamError('name'))
      return res.status(response.statusCode).json(response.body)
    }

    if (!password) {
      const response = HttpResponse.badRequest(new MissingParamError('password'))
      return res.status(response.statusCode).json(response.body)
    }

    if (!validPassword(password)) {
      const response = HttpResponse.badRequest(new InvalidParamError('Password must contain 6 characters or more'))
      return res.status(response.statusCode).json(response.body)
    }

    if (!confPassword) {
      const response = HttpResponse.badRequest(new MissingParamError('confPassword'))
      return res.status(response.statusCode).json(response.body)
    }

    if (password !== confPassword) {
      const response = HttpResponse.badRequest(new MissingParamError('Passwords do not match'))
      return res.status(response.statusCode).json(response.body)
    }

    const user = await UserRepository.save(req.body)

    const response = HttpResponse.created(user, 'User successfully registered.')
    return res.status(response.statusCode).json(response.body)
  }

  async index (req, res) {
    const users = await UserRepository.getAll()
    const response = HttpResponse.ok(users)
    return res.status(response.statusCode).json(response.body)
  }

  async show (req, res) {
    const { id } = req.params

    const user = await UserRepository.findByPk(id)

    if (user) {
      const response = HttpResponse.ok(user)
      return res.status(response.statusCode).json(response.body)
    }

    const response = HttpResponse.notFound('User not found!')
    return res.status(response.statusCode).json(response.body)
  }

  async update (req, res) {
    const { id } = req.params
    const { email, password, confPassword } = req.body

    const user = await UserRepository.findByPk(id)

    if (user) {
      if (password) {
        if (!validPassword(password)) {
          const response = HttpResponse.badRequest(new InvalidParamError('Password must contain 6 characters or more'))
          return res.status(response.statusCode).json(response.body)
        }
        if (!confPassword) {
          const response = HttpResponse.badRequest(new MissingParamError('confPassword'))
          return res.status(response.statusCode).json(response.body)
        }

        if (password !== confPassword) {
          const response = HttpResponse.badRequest(new MissingParamError('Passwords do not match'))
          return res.status(response.statusCode).json(response.body)
        }
      }

      if (email) {
        if (!validEmail.isValid(email)) {
          const response = HttpResponse.badRequest(new InvalidParamError('email'))
          return res.status(response.statusCode).json(response.body)
        }
      }

      const userUpdate = await UserRepository.update(user, req.body)
      const response = HttpResponse.ok(userUpdate, 'User edited successfully!')
      return res.status(response.statusCode).json(response.body)
    }

    const response = HttpResponse.notFound('User not found!')
    return res.status(response.statusCode).json(response.body)
  }

  async delete (req, res) {
    const { id } = req.params

    const user = await UserRepository.findByPk(id)

    if (user) {
      await UserRepository.destroy(user)
      const response = HttpResponse.ok(user, 'User deleted successfully!')
      return res.status(response.statusCode).json(response.body)
    }

    const response = HttpResponse.notFound('User not found!')
    return res.status(response.statusCode).json(response.body)
  }
}

module.exports = new UserController()
