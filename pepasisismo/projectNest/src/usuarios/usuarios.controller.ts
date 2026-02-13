import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import  { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';


@Controller('/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }
  //  @Post()
  //   create() {
  //     return this.usuariosService.create();
  //   }

  /////ojo aqui 
  @Post()
  createAllss(@Body() task: CreateTaskDto) {//modifico esto 
    return this.usuariosService.createAll(task);
  }



  /* { //probar insertarr datos 
  "title": "Mi fffff tarea",
  "status":
   false
  } */
  @Get()
  findAll() {
    return this.usuariosService.getTodoslosDatos();
  } ///=====> 

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.usuariosService.getTask(parseInt(id));
  }




  @Put()
  create(@Body() task:UpdateTaskDto ) {
    return this.usuariosService.update(task);
  }

  // @Get()
  // findAll() {
  //   return this.usuariosService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usuariosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //   return this.usuariosService.update(+id, updateUsuarioDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usuariosService.remove(+id);
  // }
}
