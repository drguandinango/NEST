import { Injectable } from '@nestjs/common';


export interface User {
  name: string;
  age: number;
}
@Injectable()
export class TasksService {



   private tasks = []


  getDatosServ(): User {


    return {
      name: 'Jhon Doe',
      age: 40
    }
  }


  create(task:any) {

    console.log(task);
    this.tasks.push(task)


    return task;
  }

  findAll() {
    return `encontrado`;
  }

  todaTarea(){

      return this.tasks;

  }

}
