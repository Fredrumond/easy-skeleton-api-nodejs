const validPassword = (password) => {
  if (password.length >= 6) {
    return true
  }
  return false
}

module.exports = {
  validPassword
}
