import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller({})

export class TaskController{

    taskService:TaskService;//variable taskservice de tipo taskservicw  y esta va adentro dd la llaves del contructor

     constructor(taskService:TaskService){//variale :de tipo task serice

        this.taskService=taskService//el cntructor de tipo java pexx    
     }

    @Get('/ss')
    getAllTasks(){

        //return 'datiurod entregados'

        return this.taskService.getTasks();
    }
}