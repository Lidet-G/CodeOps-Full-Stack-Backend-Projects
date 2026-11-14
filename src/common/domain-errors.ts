export class RestaurantNotFoundError extends Error {
  constructor(id: number) {
    super(`Restaurant with id ${id} was not found`);
    this.name = 'RestaurantNotFoundError';
  }
}

export class DishNotFoundError extends Error {
  constructor(id: number) {
    super(`Dish with id ${id} was not found`);
    this.name = 'DishNotFoundError';
  }
}

export class DuplicateRestaurantNameError extends Error {
  constructor(name: string) {
    super(`A restaurant named "${name}" already exists`);
    this.name = 'DuplicateRestaurantNameError';
  }
}
