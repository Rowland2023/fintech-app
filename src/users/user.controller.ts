import { Controller, Get, Post, Delete, Put, Param, Body, ValidationPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiConflictResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './user.entity';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // ✅ Register User
  @Post('register')
  @ApiCreatedResponse({ description: 'User registered successfully', type: User })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @ApiConflictResponse({ description: 'User with this email already exists' })
  async register(@Body(new ValidationPipe()) registerDto: RegisterUserDto): Promise<User> {
    return this.userService.register(registerDto);
  }

  // ✅ Login User
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'User logged in successfully' })
  @ApiBadRequestResponse({ description: 'Invalid credentials' })
  async login(@Body(new ValidationPipe()) loginDto: LoginUserDto): Promise<{ accessToken: string }> {
    return { accessToken: 'dummy_token' }; // Placeholder
  }

  // ✅ Get User Balance
  @Get('balance')
  @ApiOperation({ summary: 'Get user balance' })
  @ApiOkResponse({ description: 'User balance fetched successfully' })
  getBalance(): any {
    return { balance: 100 }; // Replace with actual logic
  }

  // ✅ Update User (PUT)
  @Put(':id')
  @ApiOperation({ summary: 'Update user details' })
  @ApiOkResponse({ description: 'User updated successfully' })
  async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<any> {
    return `User with ID ${id} updated`; // Replace with actual logic
  }

  // ✅ Delete User (DELETE)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiOkResponse({ description: 'User deleted successfully' })
  @ApiBadRequestResponse({ description: 'User not found' })
  async deleteUser(@Param('id') id: string): Promise<any> {
    return `User with ID ${id} deleted`; // Replace with actual logic
  }
}
