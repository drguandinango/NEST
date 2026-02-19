import { 

    IsNumber,
IsString 

} from 'class-validator' 

 


export class CreateUsersaDto {
   

@IsString() 

title: string 

@IsNumber() 

edad: number 

 
}
