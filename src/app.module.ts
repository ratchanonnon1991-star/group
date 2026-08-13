import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrdersResourceModule } from './features/orders-resource/orders-resource.module';

@Module({
  imports: [AuthModule, OrdersResourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
