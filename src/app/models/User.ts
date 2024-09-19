import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

// Definição dos tipos para User
interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
}

// Os atributos opcionais para criar um novo User
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Modelo de User extendendo Model
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
}

// Função para definir o modelo
export default (sequelize: Sequelize): typeof User => {
    User.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'Users'
    });

    return User;
};