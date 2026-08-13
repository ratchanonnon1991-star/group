import { Module } from '@nestjs/common';
import { OrdersResourceService } from './orders-resource.service';
import { OrdersResourceGateway } from './orders-resource.gateway';

@Module({
  providers: [OrdersResourceGateway, OrdersResourceService],
})
export class OrdersResourceModule {}
