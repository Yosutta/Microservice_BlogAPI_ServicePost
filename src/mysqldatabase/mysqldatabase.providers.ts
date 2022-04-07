import {createConnection} from 'typeorm'

const databaseProviders = [
    {
        provide: 'MYSQLDATABASE_CONNECTION',
        useFactory: async ()=> await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'blog.post',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: false,
        })
    }
]

export default databaseProviders