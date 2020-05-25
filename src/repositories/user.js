const { User } = require('../app/models')

const getAll = async () => {
  const user = await User.findAll()
  return user
}

const findByPk = async id => {
  const user = await User.findByPk(id)
  return user
}

const destroy = async user => {
  const userDestroy = await user.destroy()
  return userDestroy
}

const save = async (data) => {
  const { name, email, password } = data
  const user = await User.create({
    name,
    email,
    password
  })

  return user
}

const update = async (user, data) => {
  const { name, email, password } = data

  const userUpdate = await user.update({
    name,
    email,
    password
  })

  return userUpdate
}

module.exports = {
  getAll,
  findByPk,
  destroy,
  save,
  update
}
