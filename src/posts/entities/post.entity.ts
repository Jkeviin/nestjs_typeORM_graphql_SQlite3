import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Author } from "src/authors/entities/author.entity";
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from "typeorm";


@Entity()
@ObjectType()
export class Post {

    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column()
    @Field()
    title: string;

    @Column({type: 'text', nullable: true, default: ''})
    @Field({ nullable: true })
    content?: string;

    @Column({type: 'int', nullable: true})
    @Field(() => Int, { nullable: true })
    authorID: number;

    @ManyToMany(() => Author, author => author.posts)
    @Field(() => [Author])
    author: Author[];
}