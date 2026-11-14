import { InMemoryDishRepository } from './in-memory-dish.repository';

describe('InMemoryDishRepository', () => {
  it('returns eight seeded dishes', () => {
    const repository = new InMemoryDishRepository();

    expect(repository.all()).toHaveLength(8);
  });

  it('filters dishes by restaurant id', () => {
    const repository = new InMemoryDishRepository();

    expect(repository.byRestaurantId(1).map((dish) => dish.name)).toEqual([
      'Doro Wat',
      'Shiro',
    ]);
  });
});
