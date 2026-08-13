import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { OrdersResourceService } from './orders-resource.service';
import { CreateOrdersResourceDto } from './dto/create-orders-resource.dto';
import { UpdateOrdersResourceDto } from './dto/update-orders-resource.dto';

@WebSocketGateway()
export class OrdersResourceGateway {
  constructor(private readonly ordersResourceService: OrdersResourceService) {}

  @SubscribeMessage('createOrdersResource')
  create(@MessageBody() createOrdersResourceDto: CreateOrdersResourceDto) {
    return this.ordersResourceService.create(createOrdersResourceDto);
  }

  @SubscribeMessage('findAllOrdersResource')
  findAll() {
    return this.ordersResourceService.findAll();
  }

  @SubscribeMessage('findOneOrdersResource')
  findOne(@MessageBody() id: number) {
    return this.ordersResourceService.findOne(id);
  }

  @SubscribeMessage('updateOrdersResource')
  update(@MessageBody() updateOrdersResourceDto: UpdateOrdersResourceDto) {
    return this.ordersResourceService.update(updateOrdersResourceDto.id, updateOrdersResourceDto);
  }

  @SubscribeMessage('removeOrdersResource')
  remove(@MessageBody() id: number) {
    return this.ordersResourceService.remove(id);
  }
}
