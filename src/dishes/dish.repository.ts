import { Dish } from './dish.types';

export const DISH_REPOSITORY = 'DISH_REPOSITORY';

export interface DishRepository {
  all(): Dish[];
  byId(id: number): Dish | undefined;
  byRestaurantId(restaurantId: number): Dish[];
  save(dish: Dish): Dish;
}
