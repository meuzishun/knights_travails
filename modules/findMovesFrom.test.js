import { findMovesFrom } from './findMovesFrom.js';

test('findMovesFrom should return the correct values', () => {
  expect(findMovesFrom([0, 0])).toMatchObject([
    [1, 2],
    [2, 1],
  ]);
});
