const { validPassword } = require('../../utils/ValidPassword')
const { User } = require('../models')

const HttpResponse = require('./helpers/http-response')
const { MissingParamError, InvalidParamError } = require('../../utils/errors')

const EmailValidator = require('../../utils/helpers/email-validator')
class UserController {
  async store (req, res) {
    const validEmail = new EmailValidator()

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
      return res.status(400).json({ message: 'Passwords do not match' })
    }

    const user = await User.create({
      name,
      email,
      password
    })

    return res.status(201).json({ message: 'User successfully registered.', user })
  }

  async index (req, res) {
    const response = await User.findAll()
    return res.status(200).send(response)
  }

  async show (req, res) {
    const { id } = req.params

    const response = await User.findByPk(id)

    if (response) { return res.status(200).send(response) }

    return res.status(404).send({ msg: 'User not found!' })
  }

  async update (req, res) {
    const { id } = req.params
    const { name, email, password } = req.body

    const user = await User.findByPk(id)

    if (user) {
      const response = await user.update({
        name,
        email,
        password
      })

      return res.status(200).json({ type: 'success', msg: 'User edited successfully!', produto: response })
    }

    return res.status(404).send({ msg: 'User not found!' })
  }

  async delete (req, res) {
    const { id } = req.params

    const user = await User.findByPk(id)

    if (user) {
      await user.destroy()
      return res.status(200).json({ type: 'success', msg: 'User deleted successfully!' })
    }

    return res.status(404).send({ msg: 'User not found!' })
  }
}

module.exports = new UserController()
