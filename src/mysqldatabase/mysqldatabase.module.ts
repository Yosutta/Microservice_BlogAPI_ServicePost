import { Module } from "@nestjs/common";
import databaseProviders from "./mysqldatabase.providers";

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})

export class MysqlDatabaseModule{}