import { Controller, Get, Post, Body, Patch, Param, Delete, Query, /* UsePipes, ValidationPipe */ } from '@nestjs/common';
import { UsersaService } from './usersa.service';
import { CreateUsersaDto } from './dto/create-usersa.dto';
import { UpdateUsersaDto } from './dto/update-usersa.dto';

@Controller('/usersa')
export class UsersaController {
  constructor(private readonly usersaService: UsersaService) {}


  @Post()
 /*  @UsePipes(new ValidationPipe()) */
  create(@Body() user: CreateUsersaDto) {
    return this.usersaService.createUsers(user);
  }

  @Get()
  findAll(@Query()  query:any) {
    return this.usersaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersaService.findOne(parseInt(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: UpdateUsersaDto) {
    return this.usersaService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersaService.remove(+id);
  }
}
