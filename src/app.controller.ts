import { Body, Controller, Get, Post, Req } from '@nestjs/common';
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

  @MessagePattern({type: 'post', action:'edit'})
  edit(payload){
    return this.postService.edit(payload)
  }

  @MessagePattern({type: 'post', action:'delete'})
  delete(payload){
    return this.postService.delete(payload)
  }

  // @Post('aa')
  // print(@Body() body: any){
  //   console.log(body)
  //   return this.postService.create(body)
  // }
}
