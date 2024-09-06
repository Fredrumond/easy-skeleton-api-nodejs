import fs from 'fs';
import path from 'path';
import { Sequelize, Dialect, Options } from 'sequelize';
import config from '../../config/database'; // Ajuste o caminho conforme necessário

const basename = path.basename(__filename);
const db: { [key: string]: any; sequelize?: Sequelize; Sequelize?: typeof Sequelize } = {};

// Criação da instância do Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, config as Options);

// Leitura dos arquivos de modelos
fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
    })
    .forEach(file => {
        // Importação dinâmica dos modelos
        import(path.join(__dirname, file)).then((modelModule) => {
            const model = modelModule.default(sequelize);
            db[model.name] = model;
        });
    });

// Associa os modelos se a função associate estiver definida
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;