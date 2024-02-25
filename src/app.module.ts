import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { AuthorsModule } from './authors/authors.module';

// Importamos el módulo de GraphQL, que nos permitirá trabajar con GraphQL en NestJS
import { GraphQLModule } from '@nestjs/graphql'
// Importamos el driver de Apollo para que NestJS pueda trabajar con Apollo Server, que es el servidor de GraphQL
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// importamos la función join de la librería path, que nos permitirá unir rutas de archivos
import { join } from 'path';

import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [ 
    GraphQLModule.forRoot<ApolloDriverConfig>({ // Configuramos el módulo de GraphQL
      driver: ApolloDriver, // Indicamos que vamos a usar Apollo Server
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Indicamos que vamos a usar un archivo de esquema, join(process.cwd(), 'src/schema.gql') nos permite unir la ruta del archivo schema.gql con la ruta del proyecto
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PostsModule,
    AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
