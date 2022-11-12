import { checkLocation } from './checkLocation.js';

export function findMovesFrom(coordinates) {
  const locations = [];
  const moves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  moves.forEach((move) => {
    const newCoords = [coordinates[0] + move[0], coordinates[1] + move[1]];
    if (!checkLocation(newCoords)) return;
    locations.push(newCoords);
  });
  return locations;
}
