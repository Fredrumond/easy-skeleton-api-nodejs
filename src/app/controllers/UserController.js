const { validPassword } = require('../../utils/ValidPassword')
const { User } = require('../models')

class UserController {
  async store (req, res) {
    const { name, email, password, confPassword } = req.body

    if (!email || !name || !password || !confPassword) return res.status(400).json({ message: 'Invalid prammeters.' })

    if (password !== confPassword) return res.status(400).json({ message: 'Passwords do not match' })

    if (!validPassword(req.body.password)) return res.status(400).json({ message: 'Password must contain 6 characters or more.' })

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
