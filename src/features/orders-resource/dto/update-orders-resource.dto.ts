import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdersResourceDto } from './create-orders-resource.dto';

export class UpdateOrdersResourceDto extends PartialType(CreateOrdersResourceDto) {
  id: number;
}
