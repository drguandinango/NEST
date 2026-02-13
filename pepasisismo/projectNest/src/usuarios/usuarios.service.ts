import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';
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


  private tasks = []
  ///oojo aqui para crear uno por uno
  /*   createAll(task: any) {
      console.log(task)
      this.tasks.push(task)
  
      return task
  
    } */

  createAll(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }
  //crearse un task individual que el parameto lo recidba el controller 



  /*           getTask(id: number) {
              return this.tasks.find(task => task.id === id)
            } */



  getTask(id: number) {
    const taskFound = this.tasks.find(task => task.id === id)
    if (!taskFound) { return new NotFoundException(`task with id ${id} not found`) }

    return taskFound
  }
  /////////////


  getDatosServ(): User {





    return {

      name: 'Jhon Doe',

      age: 40

    }

  }



  getTodoslosDatos() {

    return this.tasks




  }
  // findOne(id: number) {
  //   return `This action returns a #${id} usuario`;
  // }

  update(task:UpdateTaskDto) {
    console.log(task) ;
    return `actualizandoooo`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} usuario`;
  // }
}
