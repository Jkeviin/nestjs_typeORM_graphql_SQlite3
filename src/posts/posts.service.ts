import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from 'src/authors/entities/author.entity';


@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post) private postsRepository: Repository<Post>,
        @InjectRepository(Author) private authorRepository: Repository<Author>
        ) { }


    async findAll(): Promise<Post[]> {
        return await this.postsRepository.find();
    }

    async findOne(id: number): Promise<Post> {
        return await this.postsRepository.findOne({
            where: {
                id
            }
        });
    }

    async createPost(post: CreatePostInput): Promise<Post> {
        const newPost = this.postsRepository.create(post);
        return await this.postsRepository.save(newPost);
    }


    async getAuthor(id: number): Promise<Author> {
        return await this.authorRepository.findOne({
            where: {
                id
            }
        });
    }
}
