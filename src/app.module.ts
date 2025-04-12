import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/ormconfig';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
    }),
    TypeOrmModule.forFeature([User]), // Registers User entity for database interactions
  ],
  controllers: [UserController], // ✅ Ensure controllers are added
  providers: [UserService], // ✅ Ensure services are provided
})
export class AppModule {}
