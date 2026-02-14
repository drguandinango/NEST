import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersaService } from './usersa.service';
import { CreateUsersaDto } from './dto/create-usersa.dto';
import { UpdateUsersaDto } from './dto/update-usersa.dto';

@Controller('usersa')
export class UsersaController {
  constructor(private readonly usersaService: UsersaService) {}

  @Post()
  create(@Body() createUsersaDto: CreateUsersaDto) {
    return this.usersaService.create(createUsersaDto);
  }

  @Get()
  findAll() {
    return this.usersaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersaDto: UpdateUsersaDto) {
    return this.usersaService.update(+id, updateUsersaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersaService.remove(+id);
  }
}
