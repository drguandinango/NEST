import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, UsePipes, /* ValidationPipe */ } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {CreateTaskDto} from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/makas')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}



  @Post()
 
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.create(task);
  }//al crear una por uua n tomar el ditp
  // @Post()
  // create(@Body() createTaskDto: CreateTaskDto) {
  //   return this.tasksService.create(createTaskDto);
  // }

  @Get()
  findAllTask(@Query() query: any) {
     console.log(query);

    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(parseInt(id));
  }


   @Put()
  update( @Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
  //   return this.tasksService.update(+id, updateTaskDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tasksService.remove(+id);
  // }
}
