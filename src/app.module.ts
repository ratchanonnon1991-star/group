import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartsModule } from './carts/carts.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [CartsModule, ReviewsModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
