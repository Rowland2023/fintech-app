// src/users/user.controller.ts
import { Controller, Post, Body, ValidationPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags, ApiBadRequestResponse, ApiConflictResponse } from '@nestjs/swagger';
import { User } from './user.entity';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiCreatedResponse({ description: 'User registered successfully', type: User })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @ApiConflictResponse({ description: 'User with this email already exists' })
  async register(@Body(new ValidationPipe()) registerDto: RegisterUserDto): Promise<User> {
    return this.userService.register(registerDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'User logged in successfully', schema: { type: 'object', properties: { accessToken: { type: 'string' } } } })
  @ApiBadRequestResponse({ description: 'Invalid credentials' })
  async login(@Body(new ValidationPipe()) loginDto: LoginUserDto): Promise<{ accessToken: string }> {
    // Authentication logic will be implemented in the Auth Service
    return { accessToken: 'dummy_token' }; // Placeholder
  }
}