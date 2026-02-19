import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersaDto } from './dto/create-usersa.dto';
import { UpdateUsersaDto } from './dto/update-usersa.dto';

@Injectable()
export class UsersaService {
  private users = [];
  createUsers(user: CreateUsersaDto) {
    console.log(user);

    this.users.push({
      ...user,

      id: this.users.length + 1,
    });

    return user

    /*          console.log(task); 

    this.tasks.push({ 

      ...task, 

      id: this.tasks.length + 1, 

    }); 

    return task;  */
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {

  const userFound = this.users.find(user => user.id === id) 

    if (!userFound) { return new NotFoundException(`task with id ${id} not found`) } 

 

    return userFound 
  }

  update(id: number, user: UpdateUsersaDto) {
    return `This action updates a #${id} usersa`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersa`;
  }
}
