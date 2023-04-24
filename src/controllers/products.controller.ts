import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: 'Products List',
      limit,
      offset,
    };
  }
  //Para que las dos rutas no choquen, siempre deben ir primero las que no son dinamicas
  @Get('filter')
  getProductFilter() {
    return {
      message: 'You are in the filter',
    };
  }

  //Enviar un HttpCode en particular. En este caso, el 202
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') id: string) {
    return {
      message: `Product ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Action to create a product',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: `Action to update a product ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: `Action to delete a product ${id}`,
    };
  }
}
