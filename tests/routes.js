// import request from 'supertest'
// import app from '../src/app'

// describe('User Endpoints', () => {
//   it('should create a new user', async () => {
//     const res = await request(app)
//       .post('/users')
//       .send({
//         name: 'test is cool',
//         email: 'test is cool',
//         password: 'test is cool'
//       })
//     expect(res.statusCode).toEqual(201)
//   })

//   it('should return users', async () => {
//     const res = await request(app)
//       .get('/users')
//     expect(res.statusCode).toEqual(200)
//   })

//   it('should return user with id 1', async () => {
//     const res = await request(app)
//       .get('/users/1')
//     expect(res.statusCode).toEqual(200)
//   })

//   it('should return 404, user with id 2', async () => {
//     const res = await request(app)
//       .get('/users/2')
//     expect(res.statusCode).toEqual(404)
//   })

//   it('should remove user with id 1', async () => {
//     const res = await request(app)
//       .delete('/users/1')
//     expect(res.statusCode).toEqual(200)
//   })

//   it('should return 404, remove user with id 2', async () => {
//     const res = await request(app)
//       .get('/users/2')
//     expect(res.statusCode).toEqual(404)
//   })
// })
