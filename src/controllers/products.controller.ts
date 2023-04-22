import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return `Products: limit => ${limit}, offset => ${offset}`;
  }
  //Para que las dos rutas no choquen, siempre deben ir primero las que no son dinamicas
  @Get('filter')
  getProductFilter() {
    return `Product Filter`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `Product ${id}`;
  }
}
