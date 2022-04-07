import { Connection } from "typeorm";
import Post from "./post.entity";

const postProviders = [
    {
        provide: 'POST_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Post),
        inject: ['MYSQLDATABASE_CONNECTION']
    }
]

export default postProviders