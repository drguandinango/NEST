import { Controller, Get, Req, Res } from '@nestjs/common';
import { HelloService } from './hello.service';
import type { Request, Response } from 'express'; 
@Controller('/')
export class HelloController {
  constructor(private readonly helloService: HelloService) {
  }

  @Get()
  index(@Req() request: Request, @Res() response: Response) {

    console.log(request.url)

    response.status(200).json({

      message: 'minuddes World',

    });



  }
}


