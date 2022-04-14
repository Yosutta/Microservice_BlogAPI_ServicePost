import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Post from './post.entity';

@Injectable()
export class PostService {
    constructor(@Inject('POST_REPOSITORY') private postRepository: Repository<Post>){}

    async findAll(): Promise<Post[]>{
        try{
            return this.postRepository.find()
        } catch(err){
            throw new Error (err)
        }
    }

    async findOne(payload): Promise<Post>{
        try{
            return this.postRepository.findOne({where:{id: payload.id}})
        } catch(err){
            throw new Error (err)
        }
    }

    async create(payload): Promise<any>{
        try{
            const newPostPayload = {
                ...payload,
                authorId: 1,
                published: 1,
                createdAt: '2022-01-01'
            }
            const addedPost = await this.postRepository.insert(newPostPayload)
            return addedPost
        }
        catch(err){
            throw new Error(err)
        }
    }

    async edit(payload): Promise<any>{
        try{
            const userid = payload.userid
            delete payload.userid
            const updatedPost = await this.postRepository.update(userid, {...payload})
            return updatedPost
        }
        catch(err){
            throw new Error(err)
        }
    }

    async delete(payload): Promise<any>{
        try{
            const userid = payload
            const deletedPost = await this.postRepository.delete(userid)
            return deletedPost
        }
        catch(err){
            throw new Error(err)
        }
    }
}
