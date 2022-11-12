import { knightMoves } from './knightMoves.js';

test('knightMoves returns expected coordinates', () => {
  expect(knightMoves([0, 0], [1, 2])).toMatchObject([
    [0, 0],
    [1, 2],
  ]);
});

test('knightMoves returns expected coordinates', () => {
  expect(knightMoves([0, 0], [3, 3])).toMatchObject([
    [0, 0],
    [1, 2],
    [3, 3],
  ]);
});

test('knightMoves returns expected coordinates', () => {
  expect(knightMoves([3, 3], [0, 0])).toMatchObject([
    [3, 3],
    [2, 1],
    [0, 0],
  ]);
});
