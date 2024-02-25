
import { PostsService } from './posts.service';
import { Resolver , Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from 'src/authors/entities/author.entity';



@Resolver(() => Post)
export class PostsResolver {
    
    constructor(private postsService: PostsService) { }

    @Query(() => [Post])
    posts() {
        return this.postsService.findAll();
    }

    @Query(() => Post)
    post(@Args('id', {type: ()=>  Int }) id: number) {
        return this.postsService.findOne(id);
    }

    @Mutation(() => Post)
    createPost(@Args('postInput') postInput: CreatePostInput) {
        return this.postsService.createPost(postInput);
    }

    @ResolveField( () => [Author])
    author(@Parent() post: Post): Promise<Author> {
        return this.postsService.getAuthor(post.authorID);
    }


}


// Este resolver es el encargado de manejar las peticiones que puede consultar el cliente.
