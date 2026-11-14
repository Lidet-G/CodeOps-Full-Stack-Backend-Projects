import { describe, expect, it } from '@jest/globals';
import { InMemoryRestaurantRepository } from './in-memory-restaurant.repository';

describe('InMemoryRestaurantRepository', () => {
  it('returns the seeded restaurants as an array', () => {
    const repository = new InMemoryRestaurantRepository();

    expect(Array.isArray(repository.all())).toBe(true);
    expect(repository.all()).toHaveLength(5);
  });

  it('finds a restaurant by numeric id', () => {
    const repository = new InMemoryRestaurantRepository();

    expect(repository.byId(1)?.name).toBe('Yod Abyssinia');
  });
});
