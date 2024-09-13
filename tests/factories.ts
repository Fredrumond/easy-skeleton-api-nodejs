import { faker } from '@faker-js/faker';
import db from '@src/app/models'

const userModel = db.User;
const generateFakeUser = async () => {
    const user = await userModel.create({
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        confPassword: faker.internet.password(),
    });

    return user;
};

export { generateFakeUser };