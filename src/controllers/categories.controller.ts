import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getProduct(@Param('id') id: string, @Param('productId') productId: string) {
    return `Category ${id}, Product ${productId}`;
  }
}
