import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }

  @Get()
  readUser() {
    return this.appService.readUser();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.appService.findOne(id);
  }

  @Get(':id/avatar')
  async getAvatar(@Param('id') id: string) {
    const user = await this.appService.findOne(id);
    return user.avatar;
  }

  @Delete(':id/avatar')
  async deleteAvatar(@Param('id') id: string) {
    return this.appService.deleteAvatar(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateData: UserUpdateDto,
  ): Promise<User> {
    return this.appService.updateUser(id, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
