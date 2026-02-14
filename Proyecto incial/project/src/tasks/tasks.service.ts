import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  create(task: any) {
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
    return this.tasks.find((task) => task.id === id);
  }

  // update(id: number,:) {
  //   return `This action updates a #${id} task`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} task`;
  // }
}
