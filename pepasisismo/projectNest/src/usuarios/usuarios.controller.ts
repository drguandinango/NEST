import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';


@Controller('/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
//  @Post()
//   create() {
//     return this.usuariosService.create();
//   }

/////ojo aqui 
 @Post()
  createAll(@Body() task:any) {
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
  }




  // @Post()
  // create(@Body() createUsuarioDto: CreateUsuarioDto) {
  //   return this.usuariosService.create(createUsuarioDto);
  // }

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
