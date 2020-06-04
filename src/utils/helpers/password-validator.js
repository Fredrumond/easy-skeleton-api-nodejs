module.exports = class PasswordValidator {
  isValid (password) {
    if (password.length >= 6) {
      return true
    }
    return false
  }
}
