import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {


   suma(n: number, v: number) {
      return n + v
   }
   //  private datas(){

   //     ['task1','task2','task3']

   //  }


   ///
   private tasks = []

   ///

   getAllInFo() {



      return this.suma(56, 5);

   }




   getAllTask() {



      return this.tasks;

   }



   createTask(task: any) {

      /*
            console.log(task)
      
      
            this.tasks.push(task);
            return task;
          */


      console.log(task);
      this.tasks.push({
         ...task,
         id: this.tasks.length + 1,
      });
      return task;

   }






   getTask(id: number) {
      //buscar 

      const taskFound = this.tasks.find((task) => task.id === id);
      if (!taskFound) {
         //controlar que lo buscado está 

         return new NotFoundException(`Task with id ${id} not found`);
      }
      return taskFound;
   }

}
