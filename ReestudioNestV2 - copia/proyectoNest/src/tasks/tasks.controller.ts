import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';


@Controller('/tasksito')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}


//HOLA AMIKODS  

  // @Post()
  // getDatos() {
  //   return this.tasksService.getDatosServ();
  // }


  @Post()
      createTask(@Body() task:any){
       //   console.log(task);

            return  this.tasksService.create(task);
        }

  
//   @Get()
//   findAlls() {
//       return  this.tasksService.findAll();

//   }

  @Get()
  findAlls() {
      return  this.tasksService.todaTarea();

  }


}
