import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartsModule } from './carts/carts.module';
import { AuthModule } from './auth/auth.module';
import { OrdersResourceModule } from './features/orders-resource/orders-resource.module';

@Module({
  imports: [AuthModule, OrdersResourceModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
