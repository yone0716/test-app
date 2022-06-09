import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';
import { PrismaService } from 'src/prisma.service';
import { TodoController } from 'src/tod/controller/todo.controller';

@Module({
  controllers: [TodoController],
  providers: [TodoService, PrismaService]
})
export class TodoModule {}
