const request = require('supertest')
const app = require('../../src/main/app')

const faker = require('faker')
// const factory = require('../factories')

const user = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: '123456',
  confPassword: '123456'
}

describe('User Create', () => {
  it('Should return 400 if no email is provided', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: user.name,
        password: user.password,
        confPassword: user.confPassword
      })
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({ error: 'Missing param: email' })
  })

  it('Should return 400 if email provided is invalid', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: user.name,
        email: 'invalid_email',
        password: user.password,
        confPassword: user.confPassword
      })
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({ error: 'Invalid param: email' })
  })

  it('Should return 400 if no name is provided', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        email: user.email,
        password: '123456',
        confPassword: '123456'
      })
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({ error: 'Missing param: name' })
  })

  it('Should return 400 if no password is provided', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: user.name,
        email: user.email,
        confPassword: '123456'
      })
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({ error: 'Missing param: password' })
  })

  it('Should return 400 if no confPassword is provided', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: user.name,
        email: user.email,
        password: '123456'
      })
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({ error: 'Missing param: confPassword' })
  })

  it('Should return 400 if the password provided is less than 6 characters', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: user.name,
        email: user.email,
        password: '123',
        confPassword: '123456'
      })
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({ error: 'Invalid param: Password must contain 6 characters or more' })
  })

  it('Should return 400 if password is diff confPassword', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: user.name,
        email: user.email,
        password: '123456',
        confPassword: '12345'
      })
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({ error: 'Missing param: Passwords do not match' })
  })

  it('Should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send(user)
    expect(res.status).toEqual(201)
    expect(res.body.message).toEqual('User successfully registered.')
  })
})

describe('User Index', () => {
  it('Should return users', async () => {
    const res = await request(app)
      .get('/api/users')
    expect(res.status).toEqual(200)
  })
})

// describe('User Show', () => {
//   it('Should return user search', async () => {
//     const user = await factory.create('User')

//     const res = await request(app)
//       .get(`/api/users/${user.id}`)
//     expect(res.status).toEqual(200)
//     expect(res.body.body.id).toEqual(user.id)
//   })

//   it('Should return 404, if user not registred', async () => {
//     const res = await request(app)
//       .get('/api/users/100')
//     expect(res.status).toEqual(404)
//     expect(res.body.message).toEqual('User not found!')
//   })
// })

// describe('User Update', () => {
//   it('Should return 404, if user not registred', async () => {
//     const res = await request(app)
//       .put('/api/users/100')
//     expect(res.status).toEqual(404)
//     expect(res.body.message).toEqual('User not found!')
//   })

//   it('Should return 400 if the password provided is less than 6 characters', async () => {
//     const user = await factory.create('User')

//     const res = await request(app)
//       .put(`/api/users/${user.id}`).send({
//         password: '12345'
//       })
//     expect(res.status).toEqual(400)
//     expect(res.body).toEqual({ error: 'Invalid param: Password must contain 6 characters or more' })
//   })

//   it('Should return 400 if no confPassword is provided', async () => {
//     const user = await factory.create('User')

//     const res = await request(app)
//       .put(`/api/users/${user.id}`).send({
//         password: '123456'
//       })
//     expect(res.status).toEqual(400)
//     expect(res.body).toEqual({ error: 'Missing param: confPassword' })
//   })

//   it('Should return 400 if password is diff confPassword', async () => {
//     const user = await factory.create('User')

//     const res = await request(app)
//       .put(`/api/users/${user.id}`).send({
//         password: '123456',
//         confPassword: '123456789'
//       })
//     expect(res.status).toEqual(400)
//     expect(res.body).toEqual({ error: 'Missing param: Passwords do not match' })
//   })

//   it('Should return 400 if email provided is invalid', async () => {
//     const user = await factory.create('User')

//     const res = await request(app)
//       .put(`/api/users/${user.id}`).send({
//         email: 'invalid_email'
//       })
//     expect(res.status).toEqual(400)
//     expect(res.body).toEqual({ error: 'Invalid param: email' })
//   })

//   it('Should return 200, if the user informed to update exists', async () => {
//     const user = await factory.create('User')

//     const res = await request(app)
//       .put(`/api/users/${user.id}`)
//     expect(res.status).toEqual(200)
//     expect(res.body.message).toEqual('User edited successfully!')
//   })
// })

// describe('User Delete', () => {
//   it('Should return 404, if user not registred', async () => {
//     const res = await request(app)
//       .delete('/api/users/100')
//     expect(res.status).toEqual(404)
//     expect(res.body.message).toEqual('User not found!')
//   })

//   it('Should return 200, if the user informed to delete exists', async () => {
//     const user = await factory.create('User')

//     const res = await request(app)
//       .delete(`/api/users/${user.id}`)
//     expect(res.status).toEqual(200)
//     expect(res.body.message).toEqual('User deleted successfully!')
//   })
// })
