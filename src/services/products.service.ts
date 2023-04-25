import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 122,
      stock: 12,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'bla bla bla',
      price: 122,
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const prod = this.products.find((item) => item.id === id);
    if (!prod) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return prod;
  }

  create(payload: CreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const prod = this.findOne(id);
    if (prod) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...prod,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    this.products.splice(index, 1);
    return true;
  }
}
