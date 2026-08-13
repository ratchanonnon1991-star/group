import { Test, TestingModule } from '@nestjs/testing';
import { OrdersResourceGateway } from './orders-resource.gateway';
import { OrdersResourceService } from './orders-resource.service';

describe('OrdersResourceGateway', () => {
  let gateway: OrdersResourceGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersResourceGateway, OrdersResourceService],
    }).compile();

    gateway = module.get<OrdersResourceGateway>(OrdersResourceGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
