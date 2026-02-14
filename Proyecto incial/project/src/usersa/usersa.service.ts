import { Injectable } from '@nestjs/common';
import { CreateUsersaDto } from './dto/create-usersa.dto';
import { UpdateUsersaDto } from './dto/update-usersa.dto';

@Injectable()
export class UsersaService {
  create(createUsersaDto: CreateUsersaDto) {
    return 'This action adds a new usersa';
  }

  findAll() {
    return `This action returns all usersa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersa`;
  }

  update(id: number, updateUsersaDto: UpdateUsersaDto) {
    return `This action updates a #${id} usersa`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersa`;
  }
}
