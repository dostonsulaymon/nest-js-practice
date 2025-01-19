import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../../service/users/users.service';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // getAllUsers() {
  //   return this.usersService.getUsers();
  // }

  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return [{ username: 'Anson', email: 'anson@anson.com' }];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return userData;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.fetchUserById(Number.parseInt(id));
  }
}
