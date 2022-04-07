import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Posts'})
class Post{
    @PrimaryGeneratedColumn('increment', {type:'bigint'})
    id: number;

    @Column({type: 'bigint'})
    authorId: string;

    @Column({type:'varchar', length: 75})
    title:string;

    @Column({type:'varchar', length:100})
    slug: string;    

    @Column({type: 'tinyint'})
    published: number;

    @Column({type: 'datetime'})
    createdAt: Date;

    @Column({type: 'text'})
    content: string
}

export default Post