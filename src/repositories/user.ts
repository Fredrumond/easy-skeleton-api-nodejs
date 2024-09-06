import User  from '../app/models';

interface UserData {
    name: string;
    email: string;
    password: string;
}

const getAll = async (): Promise<User[]> => {
    const users = await User.findAll();
    return users;
};

const findByPk = async (id: number): Promise<User | null> => {
    const user = await User.findByPk(id);
    return user;
};

const destroy = async (user: User): Promise<User> => {
    const userDestroy = await user.destroy();
    return userDestroy;
};

const save = async (data: UserData): Promise<User> => {
    const { name, email, password } = data;
    const user = await User.create({
        name,
        email,
        password
    });
    return user;
};

const update = async (user: User, data: UserData): Promise<User> => {
    const { name, email, password } = data;
    const userUpdate = await user.update({
        name,
        email,
        password
    });
    return userUpdate;
};

export default {
    getAll,
    findByPk,
    destroy,
    save,
    update
};