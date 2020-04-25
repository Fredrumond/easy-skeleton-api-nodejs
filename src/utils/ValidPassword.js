export const ValidPassword = (password) => {
  if (password.length >= 6) {
    return true
  }
  return false
}
