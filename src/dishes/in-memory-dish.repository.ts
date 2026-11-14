import { DISH_SEED } from './dishes.seed';
import { DishRepository } from './dish.repository';
import { Dish } from './dish.types';

export class InMemoryDishRepository implements DishRepository {
  private readonly rows = new Map<number, Dish>(
    DISH_SEED.map((dish) => [dish.id, dish]),
  );

  all(): Dish[] {
    return [...this.rows.values()];
  }

  byId(id: number): Dish | undefined {
    return this.rows.get(id);
  }

  byRestaurantId(restaurantId: number): Dish[] {
    return this.all().filter((dish) => dish.restaurantId === restaurantId);
  }

  save(dish: Dish): Dish {
    this.rows.set(dish.id, dish);
    return dish;
  }
}
