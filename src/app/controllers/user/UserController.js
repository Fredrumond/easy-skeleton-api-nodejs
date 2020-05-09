import { ValidPassword } from '../../../utils/ValidPassword'
import User from '../../models/User'

class UserController {
  async store (req, res) {
    const { name, email, password, confPassword } = req.body

    if (!email || !name || !password || !confPassword) return res.status(400).json()

    if (password !== confPassword) return res.status(400).json()

    const verifyPassword = ValidPassword(req.body.password)

    if (!verifyPassword) return res.status(400).json()

    await User.create({
      name,
      email,
      password
    })

    return res.status(201).json({ message: 'User successfully registered!' })
  }
}

export default new UserController()
