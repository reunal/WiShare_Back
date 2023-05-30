import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './common/utils/httpException.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @UseFilters(new HttpExceptionFilter())
  test(): string {
    return this.appService.test();
  }
}
