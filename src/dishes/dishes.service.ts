import { DishNotFoundError, RestaurantNotFoundError } from '../common/domain-errors';
import { CreateDishDto } from './dto/create-dish.dto';
import { DishRepository } from './dish.repository';
import { Dish } from './dish.types';

export class DishesService {
  constructor(
    private readonly dishes: DishRepository,
    private readonly restaurantExists: (id: number) => boolean,
  ) {}

  findAll(restaurantId?: number): Dish[] {
    return restaurantId === undefined
      ? this.dishes.all()
      : this.dishes.byRestaurantId(restaurantId);
  }

  findOne(id: number): Dish {
    const dish = this.dishes.byId(id);

    if (!dish) {
      throw new DishNotFoundError(id);
    }

    return dish;
  }

  create(dto: CreateDishDto): Dish {
    if (!this.restaurantExists(dto.restaurantId)) {
      throw new RestaurantNotFoundError(dto.restaurantId);
    }

    const id = Math.max(0, ...this.dishes.all().map((dish) => dish.id)) + 1;

    return this.dishes.save({
      id,
      restaurantId: dto.restaurantId,
      name: dto.name,
      priceSantim: dto.priceSantim,
    });
  }
}
