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

import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.productsService.findAll();
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
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(+id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    const newProd = this.productsService.create(payload);
    return {
      message: 'Product created',
      newProd,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    const updatedProd = this.productsService.update(+id, payload);
    return {
      message: `Product updated`,
      updatedProd,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.productsService.delete(+id);
    return {
      message: `Action to delete a product ${id}`,
    };
  }
}
