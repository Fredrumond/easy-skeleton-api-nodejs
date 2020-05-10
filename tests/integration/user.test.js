const request = require('supertest')
const app = require('../../src/app')

describe('User Create', () => {
  it('Should1 return 400 if no email is provided', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'test is cool',
        password: '123456',
        confPassword: '123456'
      })
    expect(res.status).toEqual(400)
  })

  it('Should return 400 if no name is provided', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        email: 'test is cool',
        password: '123456',
        confPassword: '123456'
      })
    expect(res.status).toEqual(400)
  })

  it('Should return 400 if no password is provided', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'test is cool',
        email: 'test is cool',
        confPassword: '123456'
      })
    expect(res.status).toEqual(400)
  })

  it('Should return 400 if the password provided is less than 6 characters', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'test is cool',
        email: 'test is cool',
        password: '123',
        confPassword: '123456'
      })
    expect(res.status).toEqual(400)
  })

  it('Should return 400 if password is diff confPassword', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'test is cool',
        email: 'test is cool',
        password: '123456',
        confPassword: '12345'
      })
    expect(res.status).toEqual(400)
  })

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'test is cool',
        email: 'test is cool',
        password: '1234567',
        confPassword: '1234567'
      })
    expect(res.status).toEqual(201)
    expect(res.body.message).toEqual('User successfully registered.')
  })
})

describe('User Index', () => {
  it('should return users', async () => {
    const res = await request(app)
      .get('/users')
    expect(res.status).toEqual(200)
  })
})

describe('User Show', () => {
  it('should return user with id 1', async () => {
    const user = await request(app)
      .post('/users')
      .send({
        name: 'test is cool',
        email: 'test is cool',
        password: '1234567',
        confPassword: '1234567'
      })

    const res = await request(app)
      .get(`/users/${user.body.user.id}`)
    expect(res.status).toEqual(200)
  })

  it('should return 404, user with id 2', async () => {
    const res = await request(app)
      .get('/users/100')
    expect(res.status).toEqual(404)
  })
})

describe('User Update', () => {
  it('should return 404, user with id 2 update', async () => {
    const res = await request(app)
      .put('/users/100')
    expect(res.status).toEqual(404)
  })

  it('should return 200, user with id 1 update', async () => {
    const user = await request(app)
      .post('/users')
      .send({
        name: 'test is cool',
        email: 'test is cool',
        password: '1234567',
        confPassword: '1234567'
      })
    const res = await request(app)
      .put(`/users/${user.body.user.id}`)
    expect(res.status).toEqual(200)
  })
})

describe('User Delete', () => {
  it('should return 404, remove user with id 2', async () => {
    const res = await request(app)
      .delete('/users/100')
    expect(res.status).toEqual(404)
  })

  it('should return 200, remove user with id 1', async () => {
    const user = await request(app)
      .post('/users')
      .send({
        name: 'test is cool',
        email: 'test is cool',
        password: '1234567',
        confPassword: '1234567'
      })

    const res = await request(app)
      .delete(`/users/${user.body.user.id}`)
    expect(res.status).toEqual(200)
  })
})
