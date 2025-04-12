import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...AppDataSource.options, // Extract the configuration options
    }),
    // Other modules will be imported here
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
