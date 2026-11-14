import { Module } from '@nestjs/common';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { DishRepository, DISH_REPOSITORY } from './dish.repository';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';
import { InMemoryDishRepository } from './in-memory-dish.repository';

@Module({
  imports: [RestaurantsModule],
  controllers: [DishesController],
  providers: [
    {
      provide: DISH_REPOSITORY,
      useClass: InMemoryDishRepository,
    },
    {
      provide: DishesService,
      inject: [DISH_REPOSITORY, RestaurantsService],
      useFactory: (
        dishRepository: DishRepository,
        restaurants: RestaurantsService,
      ) =>
        new DishesService(
          dishRepository,
          (restaurantId) => {
            try {
              restaurants.findOne(restaurantId);
              return true;
            } catch {
              return false;
            }
          },
        ),
    },
  ],
})
export class DishesModule {}
