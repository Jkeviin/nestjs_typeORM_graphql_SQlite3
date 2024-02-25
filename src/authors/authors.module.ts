import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorsResolver, AuthorsService],
  exports: [TypeOrmModule.forFeature([Author])] // Falla a veces aqui, a veces pongo [AuthorsService] o [AuthorsResolver] o [TypeOrmModule.forFeature([Author])] o [AuthorsModule]
})
export class AuthorsModule {}