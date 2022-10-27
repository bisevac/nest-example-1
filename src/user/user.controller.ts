import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse } from '../common/base/ApiResponse';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() body): Promise<ApiResponse<null>> {
    const user: IUser = {
      email: body.email,
      name: body.name,
      phone: body.phone,
      password: body.password,
    };

    await this.userService.create(user);

    return new ApiResponse();
  }

  @Get('/:id')
  async getUser(@Param('id') userId: number): Promise<ApiResponse<IUser>> {
    const user = await this.userService.getUser(userId);

    return new ApiResponse(user);
  }

  @Get('')
  async getUsers() {
    const users = await this.userService.getUsers();

    return new ApiResponse(users);
  }
}
