import { Controller, Get, Req } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { PostService } from './post/post.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly postService: PostService) {}
  
  @MessagePattern({type: 'post', action:'get_all'})
  findAll(){
    return this.postService.findAll()
  }

  @MessagePattern({type: 'post', action:'get_one'})
  findOne(payload){
    return this.postService.findOne(payload)
  }

  @MessagePattern({type: 'post', action:'create'})
  create(payload){
    return this.postService.create(payload)
  }
}
