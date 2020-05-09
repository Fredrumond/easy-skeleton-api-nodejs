import UserController from './UserController'
import { mockRequest, mockResponse } from '../../../../__MOCKS__/express'

describe('User Controller', () => {
  it('Should return 400 if no email is provided', async () => {
    const sut = UserController

    const req = mockRequest({}, {
      email: 'any_name'
    })

    const res = mockResponse()

    await sut.store(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('Should return 400 if no name is provided', async () => {
    const sut = UserController

    const req = mockRequest({}, {
      email: 'any_email'
    })

    const res = mockResponse()

    await sut.store(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('Should return 400 if no password is provided', async () => {
    const sut = UserController

    const req = mockRequest({}, {
      email: 'any_email'
    })

    const res = mockResponse()

    await sut.store(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('Should return 400 if the password provided is less than 6 characters', async () => {
    const sut = UserController
    const req = mockRequest({}, {
      name: 'any_name',
      email: 'any_email',
      password: '123'
    })

    const res = mockResponse()

    await sut.store(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('Should return 400 if password is diff confPassword', async () => {
    const sut = UserController

    const req = mockRequest({}, {
      name: 'any_name',
      email: 'any_email',
      password: '123',
      confPassword: '1234'
    })

    const res = mockResponse()

    await sut.store(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })
})
