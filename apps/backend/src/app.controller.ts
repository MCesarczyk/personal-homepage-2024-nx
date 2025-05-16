import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

import { AppService } from './app.service';
import { SkipAuth } from '@ph24/nest/util';

@Controller()
@ApiExcludeController()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @SkipAuth()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
