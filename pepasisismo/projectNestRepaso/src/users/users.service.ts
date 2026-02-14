import { Injectable } from '@nestjs/common';


@Injectable()
export class UsersService {

  private tasks = []

  createAlltasks(task: any) {
    console.log(task);

    this.tasks.push({

      ...task,

      id: this.tasks.length + 1,
//soloo asignado un id pero no recibido ni controlado es decir solo subi estte estract de codee para cont++
    });
///continuat dese aui cunado ya se repase
    return task;
  }



  /* pos t 
  
  CreateAlltasks(task:any) 
  
  Tasks.pusk(task) 
  
  return task  */

  /* Get 

Getalltasks() 

} 

Return this.tasks; 

}  */



  Getalltasks() {
    return this.tasks;

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
