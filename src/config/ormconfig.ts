

import { DataSource } from 'typeorm';
import 'dotenv/config'; // Alternatively, import and call config here if not in main.ts



export const  AppDataSource = new DataSource({
  type: process.env.DATABASE_TYPE as any, // Use type assertion
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '3306', 10), // Parse port to number with a default
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true', // Parse boolean value
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '/../subscribers/**/*{.ts,.js}'],
  driver: require('mysql2'),
});


