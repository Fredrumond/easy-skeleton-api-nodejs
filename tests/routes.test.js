import request from 'supertest';
import app from '../src/app';

describe('Post Endpoints', () => {
    it('should create a new post', async () => {
      const res = await request(app)
        .post('/users')
        .send({
          name: 'test is cool',
          email: 'test is cool',
          password: 'test is cool',
        })
      expect(res.statusCode).toEqual(201)
    })
  })