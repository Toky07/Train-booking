import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['./src/**/*.entity.ts'],
    synchronize: false,
    migrations: [process.env.MIGRATION_DIR+'/*.ts'],
})

AppDataSource.initialize()
    .then(() => {
        console.log('Data source has been initialized!')
    })
    .catch((err) => {
        console.error('Eror during Data Source initialization', err)
    });


export default AppDataSource;