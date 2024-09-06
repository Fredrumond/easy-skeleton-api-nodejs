import supertest from "supertest";
// import app from '@src/main/app'
import app from '../../src/main/app';
console.log(app);
describe('User Index',() => {
    it('Should return users', async () => {
        const {body, status} = await supertest(app).get('/api/users');
        expect(status).toEqual(200)
    });
});