const request = require('supertest')
const app = require('../../src/app')

describe('User Endpoints', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'test is cool',
        email: 'test is cool',
        password: '123456',
        confPassword: '123456'
      })
    expect(res.status).toEqual(201)
  })

  it('should return users', async () => {
    const res = await request(app)
      .get('/users')
    expect(res.status).toEqual(200)
  })

  it('should return user with id 1', async () => {
    const res = await request(app)
      .get('/users/1')
    expect(res.status).toEqual(200)
  })

  it('should return 404, user with id 2', async () => {
    const res = await request(app)
      .get('/users/2')
    expect(res.status).toEqual(404)
  })

  it('should remove user with id 1', async () => {
    const res = await request(app)
      .delete('/users/1')
    expect(res.status).toEqual(200)
  })

  it('should return 404, remove user with id 2', async () => {
    const res = await request(app)
      .get('/users/2')
    expect(res.status).toEqual(404)
  })
})
