import { Injectable } from '@nestjs/common';
import { CreateOrdersResourceDto } from './dto/create-orders-resource.dto';
import { UpdateOrdersResourceDto } from './dto/update-orders-resource.dto';

@Injectable()
export class OrdersResourceService {
  create(createOrdersResourceDto: CreateOrdersResourceDto) {
    return 'This action adds a new ordersResource';
  }

  findAll() {
    return `This action returns all ordersResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersResource`;
  }

  update(id: number, updateOrdersResourceDto: UpdateOrdersResourceDto) {
    return `This action updates a #${id} ordersResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersResource`;
  }
}
