import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});


interface Config {
    host: string;
    username: string;
    password: string;
    database: string;
    dialect: string;
    storage?: string;
    logging: boolean;
    define: {
        timestamps: boolean;
        underscored: boolean;
        underscoredAll: boolean;
    };
}

// Cria e exporta a configuração
const config: Config = {
    host: process.env.DB_SERVER as string,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    database: process.env.DB_NAME as string,
    dialect: process.env.DB_DIALECT || 'mysql',
    storage: process.env.DB_DIALECT === 'sqlite' ? './tests/database.sqlite' : undefined,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};

export default config;