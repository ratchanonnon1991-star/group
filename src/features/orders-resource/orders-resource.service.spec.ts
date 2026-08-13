import { Test, TestingModule } from '@nestjs/testing';
import { OrdersResourceService } from './orders-resource.service';

describe('OrdersResourceService', () => {
  let service: OrdersResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersResourceService],
    }).compile();

    service = module.get<OrdersResourceService>(OrdersResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
