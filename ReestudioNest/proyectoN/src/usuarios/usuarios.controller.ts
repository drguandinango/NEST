import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

constructor(private usuariosService:UsuariosService){}
 @Get()
    getDatos(){


        return this.usuariosService.getDatosServ();
    }

    @Post()
    PostDatos(){


        return this.usuariosService.PostDatosServ();
    }
    @Delete()
    DeleteDatos(){


        return this.usuariosService.DeleteDatosServ();
    }

    @Put()
    PutDatos(){


        return this.usuariosService.PutDatosServ();
    }
    @Patch()
    PatchDatos(){


        return this.usuariosService.PatchDatosServ();
    }

}
