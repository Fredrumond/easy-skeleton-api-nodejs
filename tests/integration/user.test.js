const request = require('supertest')
const app = require('../../src/app')

const faker = require('faker')
const factory = require('../factories')

const user = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: '123456',
  confPassword: '123456'
}

describe('User Create', () => {
  it('Should1 return 400 if no email is provided', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: user.name,
        password: user.password,
        confPassword: user.confPassword
      })
    expect(res.status).toEqual(400)
  })

  it('Should return 400 if no name is provided', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        email: user.email,
        password: '123456',
        confPassword: '123456'
      })
    expect(res.status).toEqual(400)
  })

  it('Should return 400 if no password is provided', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: user.name,
        email: user.email,
        confPassword: '123456'
      })
    expect(res.status).toEqual(400)
  })

  it('Should return 400 if the password provided is less than 6 characters', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: user.name,
        email: user.email,
        password: '123',
        confPassword: '123456'
      })
    expect(res.status).toEqual(400)
  })

  it('Should return 400 if password is diff confPassword', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: user.name,
        email: user.email,
        password: '123456',
        confPassword: '12345'
      })
    expect(res.status).toEqual(400)
  })

  it('Should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send(user)
    expect(res.status).toEqual(201)
    expect(res.body.message).toEqual('User successfully registered.')
  })
})

describe('User Index', () => {
  it('Should return users', async () => {
    const res = await request(app)
      .get('/users')
    expect(res.status).toEqual(200)
  })
})

describe('User Show', () => {
  it('Should return user search', async () => {
    const user = await factory.create('User')

    const res = await request(app)
      .get(`/users/${user.id}`)
    expect(res.status).toEqual(200)
  })

  it('Should return 404, if user not registred', async () => {
    const res = await request(app)
      .get('/users/100')
    expect(res.status).toEqual(404)
  })
})

describe('User Update', () => {
  it('Should return 404, if user not registred', async () => {
    const res = await request(app)
      .put('/users/100')
    expect(res.status).toEqual(404)
  })

  it('Should return 200, if the user informed to update exists', async () => {
    const user = await factory.create('User')

    const res = await request(app)
      .put(`/users/${user.id}`)
    expect(res.status).toEqual(200)
  })
})

describe('User Delete', () => {
  it('Should return 404, if user not registred', async () => {
    const res = await request(app)
      .delete('/users/100')
    expect(res.status).toEqual(404)
  })

  it('Should return 200, if the user informed to delete exists', async () => {
    const user = await factory.create('User')

    const res = await request(app)
      .delete(`/users/${user.id}`)
    expect(res.status).toEqual(200)
  })
})
