const { validPassword } = require('../../src/utils/ValidPassword')

describe('utils/validPassword', () => {
  it('should return FALSE if the password provided is less than 6 characters', () => {
    const invalidPass = validPassword('123')
    expect(invalidPass).toEqual(false)
  })

  it('should return TRUE if the password provided is equal than 6 characters', () => {
    const validPass = validPassword('123456')
    expect(validPass).toEqual(true)
  })

  it('should return TRUE if the password provided is further than 6 characters', () => {
    const validPass = validPassword('1234567')
    expect(validPass).toEqual(true)
  })
})
