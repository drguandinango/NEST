import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('monarca')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() task: CreateTaskDto) {
    return this.tasksService.create(task);
  }

  @Get()
  findAll(@Query() query:any) {
     console.log(query)
    return this.tasksService.findAllTask();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(parseInt(id));
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    return this.tasksService.update(+id, task);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
