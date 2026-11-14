import { Module } from '@nestjs/common';
import { InMemoryRestaurantRepository } from './in-memory-restaurant.repository';
import { RESTAURANT_REPOSITORY } from './restaurant.repository';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';

@Module({
  controllers: [RestaurantsController],
  providers: [
    RestaurantsService,
    {
      provide: RESTAURANT_REPOSITORY,
      useClass: InMemoryRestaurantRepository,
    },
  ],
  exports: [RestaurantsService],
})
export class RestaurantsModule {}
