import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HelloController } from './hello/hello.controller';


@Module({
  imports: [TasksModule, UsuariosModule],
  controllers: [HelloController],
 
})
export class AppModule {}
