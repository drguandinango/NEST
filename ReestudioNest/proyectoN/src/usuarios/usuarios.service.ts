import { Injectable } from '@nestjs/common';

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class UsuariosService {


    getDatosServ(): User {


        return{
            name: 'Jhon Doe',
            age: 40
        }
    }


    PostDatosServ() {


        return "posteados lo datines"
    }


    DeleteDatosServ() {


        return "deleteados lo datines"
    }

    PutDatosServ() {


        return "putedoos lo datines"
    }
    PatchDatosServ() {


        return "patcheados lo datines"
    }
}
