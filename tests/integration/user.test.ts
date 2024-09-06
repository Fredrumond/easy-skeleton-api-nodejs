import supertest from "supertest";
import app from '@src/main/app';

const user = {
    name: 'teste',
    email: 'teste@teste.com',
    password: '123456',
    confPassword: '123456'
}
describe('User Index',() => {
    it('Should return users', async () => {
        const {body, status} = await supertest(app).get('/api/users');
        expect(status).toEqual(200)
    });
});
// describe('User Create', () => {
//     it('Should return 400 if no email is provided', async () => {
//         const {body,status} = await supertest(app)
//             .post('api/users')
//         //     .send({
//         //         name: user.name,
//         //         password: user.password,
//         //         confPassword: user.confPassword
//         //     })
//         // expect(status).toEqual(400)
//         // expect(body).toEqual({ error: 'Missing param: email' })
//     })
//
// })
