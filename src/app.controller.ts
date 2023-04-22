import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new-endpoint')
  newEndpoint() {
    return 'This is a new endpoint!';
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `Product ${id}`;
  }
}
