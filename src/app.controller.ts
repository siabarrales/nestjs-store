import { Controller, Get, Param, Query } from '@nestjs/common';
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

  //Para que las dos rutas no choquen, siempre deben ir primero las que no son dinamicas
  @Get('products/filter')
  getProductFilter() {
    return `ProductFilter`;
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `Product ${id}`;
  }

  @Get('products')
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return `Products: limit => ${limit}, offset => ${offset}`;
  }
}
