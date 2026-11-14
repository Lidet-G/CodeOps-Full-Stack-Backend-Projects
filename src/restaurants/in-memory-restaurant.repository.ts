import { Injectable } from '@nestjs/common';
import { RESTAURANT_SEED } from './restaurants.seed';
import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from './restaurant.types';

@Injectable()
export class InMemoryRestaurantRepository implements RestaurantRepository {
  private readonly rows = new Map<number, Restaurant>(
    RESTAURANT_SEED.map((restaurant) => [restaurant.id, restaurant]),
  );

  all(): Restaurant[] {
    return [...this.rows.values()];
  }

  byId(id: number): Restaurant | undefined {
    return this.rows.get(id);
  }

  save(restaurant: Restaurant): Restaurant {
    this.rows.set(restaurant.id, restaurant);
    return restaurant;
  }
}
