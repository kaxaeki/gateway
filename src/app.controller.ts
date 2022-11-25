import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get('getTestName')
  getTestName() {
    return this.configService.get('TEST_VALUE').name;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
