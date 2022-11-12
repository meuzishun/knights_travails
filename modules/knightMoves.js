import { findMovesFrom } from './findMovesFrom.js';

export function knightMoves(start, end) {
  const queue = [];
  const path = [start];
  queue.push(path);

  while (queue.length > 0) {
    const path = queue.shift();

    if (path.at(-1).toString() === end.toString()) {
      return path;
    }

    const nextLevel = findMovesFrom(path.at(-1));
    nextLevel.forEach((cell) => queue.push([...path, cell]));
  }
}
