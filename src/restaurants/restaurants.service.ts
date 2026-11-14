import { Inject, Injectable } from '@nestjs/common';
import {
  DuplicateRestaurantNameError,
  RestaurantNotFoundError,
} from '../common/domain-errors';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import {
  RESTAURANT_REPOSITORY,
  RestaurantRepository,
} from './restaurant.repository';
import { Area, Restaurant } from './restaurant.types';

@Injectable()
export class RestaurantsService {
  constructor(
    @Inject(RESTAURANT_REPOSITORY)
    private readonly repository: RestaurantRepository,
  ) {}

  findAll(area?: Area): Restaurant[] {
    const restaurants = this.repository.all();

    return area
      ? restaurants.filter((restaurant) => restaurant.area === area)
      : restaurants;
  }

  findOpen(): Restaurant[] {
    return this.repository.all().filter((restaurant) => restaurant.isOpen);
  }

  findOne(id: number): Restaurant {
    const restaurant = this.repository.byId(id);

    if (!restaurant) {
      throw new RestaurantNotFoundError(id);
    }

    return restaurant;
  }

  create(dto: CreateRestaurantDto): Restaurant {
    const duplicate = this.repository
      .all()
      .some(
        (restaurant) =>
          restaurant.name.toLowerCase() === dto.name.toLowerCase(),
      );

    if (duplicate) {
      throw new DuplicateRestaurantNameError(dto.name);
    }

    const id =
      Math.max(0, ...this.repository.all().map((restaurant) => restaurant.id)) +
      1;

    return this.repository.save({
      id,
      name: dto.name,
      area: dto.area,
      isOpen: dto.isOpen ?? true,
    });
  }
}
