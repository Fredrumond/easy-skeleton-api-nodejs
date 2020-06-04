const PasswordValidator = require('../../src/utils/helpers/password-validator')

describe('utils/helpers/password-validator', () => {
  it('should return FALSE if the password provided is less than 6 characters', () => {
    const sut = new PasswordValidator()
    const invalidPass = sut.isValid('123')
    expect(invalidPass).toEqual(false)
  })

  it('should return TRUE if the password provided is equal than 6 characters', () => {
    const sut = new PasswordValidator()
    const validPass = sut.isValid('123456')
    expect(validPass).toEqual(true)
  })

  it('should return TRUE if the password provided is further than 6 characters', () => {
    const sut = new PasswordValidator()
    const validPass = sut.isValid('1234567')
    expect(validPass).toEqual(true)
  })
})
