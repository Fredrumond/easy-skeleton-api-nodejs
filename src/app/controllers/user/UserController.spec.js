
class UserController {
  store (req, res) {
    console.log(req)
    const { name, email, password, confPassword } = req.body

    if (!email || !name || !password || !confPassword) return 400

    if (password !== confPassword) return 400

    const verifyPassword = ValidPassword(req.body.password)

    if (!verifyPassword) return 400

    return res.status(201).json({ msg: 'User successfully registered!' })
  }
}

export const ValidPassword = (password) => {
  if (password.length >= 6) {
    return true
  }
  return false
}

describe('User Controller', () => {
  const mockRequest = (sessionData, body) => ({
    session: { data: sessionData },
    body
  })

  const mockResponse = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
  }

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

  it('Should return 400 if the password provided is less than 6 characters', () => {
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

  it('Should return 400 if password is diff confPassword', () => {
    const sut = new UserController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: '123',
        confPassword: '1234'
      }
    }
    const response = sut.store(httpRequest)
    expect(response).toEqual(400)
  })

  it('Should return 201 if provided with all correct parameters', () => {
    const sut = new UserController()

    const req = mockRequest({}, {
      name: 'any_name',
      email: 'any_email',
      password: '123456',
      confPassword: '123456'
    })
    const res = mockResponse()

    sut.store(req, res)

    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith({ msg: 'User successfully registered!' })
  })
})
