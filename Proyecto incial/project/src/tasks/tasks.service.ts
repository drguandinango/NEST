import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
 
private tasks=[]

   create(task:any) {

    this.tasks.push(task)
    return task ;
  }


  findAll() {
    return this.tasks;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} task`;
  // }

  // update(id: number,:) {
  //   return `This action updates a #${id} task`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} task`;
  // }
}
