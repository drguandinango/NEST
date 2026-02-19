import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import  { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks = [];

  create(task: CreateTaskDto) {
    console.log(task);

    this.tasks.push({
      ...task,

      id: this.tasks.length + 1,
    });

    return task;
  }

  /*   createAll(task: any) { 

    console.log(task); 

    this.tasks.push({ 

      ...task, 

      id: this.tasks.length + 1, 

    }); 

    return task; 

  }  */

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      return new NotFoundException(`task with id ${id} not found`);
    }

    return taskFound;
  }


  
updateTask(task: UpdateTaskDto) { 

console.log(task) 

return 'actualizando tareas'; 

} 

}

// remove(id: number) {
//   return `This action removes a #${id} task`;
// }
