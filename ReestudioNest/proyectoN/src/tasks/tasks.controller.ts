import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {


    }
    // @Post()
    //     getAllTasks(){

    //         return  this.tasksService.getAllInFo();
    //     }



    //  @Post()
    //     createTask(@Body() task:any){
    //       console.log(task);

    //         return  this.tasksService.getAllInFo();
    //     }





    //    getAllTasks(@Body() task:any){
    //    //   console.log(task);

    //         return  this.tasksService.getAllTask();
    //     }    @Get()


    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getAllTask();
    }


    I
        @Get('/:id')
        getTask(@Param('id') id: string) {
        return this.tasksService.getTask(parseInt(id));
        }

    @Post()
    createTasks(@Body() task: any) {
        //   console.log(task);

        return this.tasksService.createTask(task);
    }





}



