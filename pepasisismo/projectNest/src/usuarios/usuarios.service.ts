import { Injectable } from '@nestjs/common';
// import { CreateUsuarioDto } from './dto/create-usuario.dto';
// import { UpdateUsuarioDto } from './dto/update-usuario.dto';


export interface User {
  name: string;
  age: number;
}
@Injectable()
export class UsuariosService {
  create() {
    return 'This action adds a new usuario';
  }

 

  getDatosServ(): User { 

  

  

        return{ 

            name: 'Jhon Doe', 

            age: 40 

        } 

    } 
  // findOne(id: number) {
  //   return `This action returns a #${id} usuario`;
  // }

  // update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  //   return `This action updates a #${id} usuario`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} usuario`;
  // }
}
