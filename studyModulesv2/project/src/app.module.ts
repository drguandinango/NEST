import { Module } from '@nestjs/common';

import { TaskModule } from './tasks/task.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
@Module({
  imports: [TaskModule, AuthModule],
  controllers: [HelloController],
})
export class AppModule {}
