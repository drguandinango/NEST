import { Injectable } from '@nestjs/common';


@Injectable()
export class UsersService {

  private tasks=[]

  createAlltasks(task: any) {
    console.log(task)
    this.tasks.push(task)

    return task
  }
  /* pos t 
  
  CreateAlltasks(task:any) 
  
  Tasks.pusk(task) 
  
  return task  */



  findAll() {
    return `This action returns all users`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: ) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
