import supertest from "supertest";
import app from '@src/main/app';
import { generateFakeUser } from '../factories';
const user = {
    name: 'teste',
    email: 'teste@teste.com',
    password: '123456',
    confPassword: '123456'
}
describe('User Create', () => {
    it('Should return 400 if no email is provided', async () => {
        const {body,status} = await supertest(app)
            .post('/api/users')
            .send({
                name: user.name,
                password: user.password,
                confPassword: user.confPassword
            })
        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Missing param: email' })
    })

    it('Should return 400 if email provided is invalid', async () => {
        const {body,status} = await supertest(app)
            .post('/api/users')
            .send({
                name: user.name,
                email: 'invalid_email',
                password: user.password,
                confPassword: user.confPassword
            })
        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Invalid param: email' })
    })

    it('Should return 400 if no name is provided', async () => {
        const {body,status} = await supertest(app)
            .post('/api/users')
            .send({
                email: user.email,
                password: '123456',
                confPassword: '123456'
            })
        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Missing param: name' })
    })

    it('Should return 400 if no password is provided', async () => {
        const {body,status} = await supertest(app)
            .post('/api/users')
            .send({
                name: user.name,
                email: user.email,
                confPassword: '123456'
            })
        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Missing param: password' })
    })

    it('Should return 400 if no confPassword is provided', async () => {
        const {body,status} = await supertest(app)
            .post('/api/users')
            .send({
                name: user.name,
                email: user.email,
                password: '123456'
            })
        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Missing param: confPassword' })
    })

    it('Should return 400 if the password provided is less than 6 characters', async () => {
        const {body,status} = await supertest(app)
            .post('/api/users')
            .send({
                name: user.name,
                email: user.email,
                password: '123',
                confPassword: '123456'
            })
        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Invalid param: Password must contain 6 characters or more' })
    })

    it('Should return 400 if password is diff confPassword', async () => {
        const {body,status} = await supertest(app)
            .post('/api/users')
            .send({
                name: user.name,
                email: user.email,
                password: '123456',
                confPassword: '12345'
            })
        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Missing param: Passwords do not match' })
    })

    it('Should create a new user', async () => {
        const {body,status} = await supertest(app)
            .post('/api/users')
            .send(user)
        expect(status).toEqual(201)
        expect(body.message).toEqual('User successfully registered.')
    })

})

describe('User Index',() => {
    it('Should return users', async () => {
        const {body, status} = await supertest(app).get('/api/users');
        expect(status).toEqual(200)
    });
});

describe('User Show', () => {
    it('Should return user search', async () => {
        const fakeUserData = await generateFakeUser();
        const {body, status} = await supertest(app)
            .get(`/api/users/${fakeUserData.id}`)
        expect(status).toEqual(200)
        expect(body.body.id).toEqual(fakeUserData.id)
    })

    it('Should return 404, if user not registred', async () => {
        const {body, status} = await supertest(app)
            .get('/api/users/100')
        expect(status).toEqual(404)
        expect(body.message).toEqual('User not found!')
    })
})

describe('User Update', () => {
    it('Should return 404, if user not registred', async () => {
        const {body, status} = await supertest(app)
            .put('/api/users/100')
        expect(status).toEqual(404)
        expect(body.message).toEqual('User not found!')
    })

    it('Should return 400 if the password provided is less than 6 characters', async () => {
        const fakeUserData = await generateFakeUser();

        const {body, status} = await supertest(app)
            .put(`/api/users/${fakeUserData.id}`).send({
                password: '12345'
            })

        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Invalid param: Password must contain 6 characters or more' })
    })

    it('Should return 400 if no confPassword is provided', async () => {
        const fakeUserData = await generateFakeUser();

        const {body, status} = await supertest(app)
            .put(`/api/users/${fakeUserData.id}`).send({
                password: '123456'
            })
        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Missing param: confPassword' })
    })

    it('Should return 400 if password is diff confPassword', async () => {
        const fakeUserData = await generateFakeUser();

        const {body, status} = await supertest(app)
            .put(`/api/users/${fakeUserData.id}`).send({
                password: '123456',
                confPassword: '123456789'
            })
        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Missing param: Passwords do not match' })
    })

    it('Should return 400 if email provided is invalid', async () => {
        const fakeUserData = await generateFakeUser();

        const {body, status} = await supertest(app)
            .put(`/api/users/${fakeUserData.id}`).send({
                email: 'invalid_email'
            })
        expect(status).toEqual(400)
        expect(body).toEqual({ error: 'Invalid param: email' })
    })

    it('Should return 200, if the user informed to update exists', async () => {
        const fakeUserData = await generateFakeUser();

        const {body, status} = await supertest(app)
            .put(`/api/users/${fakeUserData.id}`)
        expect(status).toEqual(200)
        expect(body.message).toEqual('User edited successfully!')
    })
})

describe('User Delete', () => {
    it('Should return 404, if user not registred', async () => {
        const {body, status} = await supertest(app)
            .delete('/api/users/100')
        expect(status).toEqual(404)
        expect(body.message).toEqual('User not found!')
    })

    it('Should return 200, if the user informed to delete exists', async () => {
        const fakeUserData = await generateFakeUser();

        const {body, status} = await supertest(app)
            .delete(`/api/users/${fakeUserData.id}`)
        expect(status).toEqual(200)
        expect(body.message).toEqual('User deleted successfully!')
    })
})
