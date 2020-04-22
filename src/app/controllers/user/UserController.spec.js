class UserController {
  store (req, res) {
    const { name, email, password } = req.body

    if (!email || !name || !password) {
      return 400
    }

    const verifyPassword = ValidPassword(req.body.password)

    if (!verifyPassword) return 400

    return 200
  }
}

export const ValidPassword = (password) => {
  console.log('TRETA => ' + password.string)
  if (password.lenght >= 6) {
    return true
  }
  return false
}

describe('User Controller', () => {
  it('Should return 400 if no email is provided', () => {
    const sut = new UserController()
    const httpRequest = {
      body: {
        name: 'any_name'
      }
    }
    const response = sut.store(httpRequest)
    expect(response).toEqual(400)
  })

  it('Should return 400 if no name is provided', () => {
    const sut = new UserController()
    const httpRequest = {
      body: {
        email: 'any_email'
      }
    }
    const response = sut.store(httpRequest)
    expect(response).toEqual(400)
  })

  it('Should return 400 if no password is provided', () => {
    const sut = new UserController()
    const httpRequest = {
      body: {
        email: 'any_email'
      }
    }
    const response = sut.store(httpRequest)
    expect(response).toEqual(400)
  })

  it('Must return 400 if the password provided is less than 6 characters', () => {
    const sut = new UserController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: '123'
      }
    }
    const response = sut.store(httpRequest)
    expect(response).toEqual(400)
  })

//   it('Should return 200 if provided with all correct parameters', () => {
//     const sut = new UserController()
//     const httpRequest = {
//       body: {
//         name: 'any_name',
//         email: 'any_email',
//         password: '123456'
//       }
//     }
//     const response = sut.store(httpRequest)
//     expect(response).toEqual(200)
//   })
})
