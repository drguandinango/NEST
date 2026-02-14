import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersaModule } from './usersa/usersa.module';

@Module({
  imports: [TasksModule, UsersaModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
