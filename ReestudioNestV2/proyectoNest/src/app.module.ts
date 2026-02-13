import { Module } from '@nestjs/common';

import { TasksModule } from './tasks/tasks.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [TasksModule, HelloModule],
 
})
export class AppModule {}
