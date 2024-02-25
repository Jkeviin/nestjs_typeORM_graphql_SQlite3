import { Field, InputType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, MaxLength, MinLength } from "class-validator";


@InputType() // Aqui lo convertimos de entrada
export class CreatePostInput {

    @MinLength(3,
        { message: 'El titulo debe tener al menos 3 caracteres' }
        )
    @MaxLength(100,
        { message: 'El titulo debe tener menos de 100 caracteres' }
        )
    @IsNotEmpty({ message: 'El titulo no puede estar vacio' })
    @Field()
    title: string;


    @MinLength(3, { message: 'El contenido debe tener al menos 3 caracteres' })
    @MaxLength(500, { message: 'El contenido debe tener menos de 500 caracteres' })
    @Field({ nullable: true })
    content?: string;

    @IsInt({ message: 'El autorID debe ser un numero entero' })
    @Field({ nullable: true })
    authorID: number;
}