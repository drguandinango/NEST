import { Module } from '@nestjs/common';
import { UsersaService } from './usersa.service';
import { UsersaController } from './usersa.controller';

@Module({
  controllers: [UsersaController],
  providers: [UsersaService],
})
export class UsersaModule {}
