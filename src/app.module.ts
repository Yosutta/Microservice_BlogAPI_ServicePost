import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlDatabaseModule } from './mysqldatabase/mysqldatabase.module';
import postProviders from './post/post.providers';
import { PostService } from './post/post.service';

@Module({
  imports: [MysqlDatabaseModule],
  controllers: [AppController],
  providers: [AppService, ...postProviders, PostService],
})
export class AppModule {}
