# Knights Travails

This project was completed in partial fulfillment of the curriculum of [The Odin Project](https://www.theodinproject.com/)

## Instructions

Build a function that shows the shortest possible route between two points on an 8x8 chess board for a knight to travel. The function should accept two coordinates (arrays of two values) and return an array of coordinates indicating the shortest path.

## Thoughts

Ok, I'm thinking that we should create a vertex class which takes coordinates and automatically generates other positions on the board (up to 8: NW, NE, EN, ES, SE, SW, WS, WN). Before generating each coordinate we first make sure that it doesn't spill off of the board (e.g. [-1, 5] or [3, 9]).

When calling the function, we first generate a vertex and look at each of its children. If none of them are the coordinate we are looking for, we then generate children for each child and look at them. As soon as we find our coordinate, we stop... but how do we count the moves and keep track of the path?

How about this... create an 8x8 game board (like the instructions say! duh) with loops that create rows and columns of coordinates. Coordinates will be just an array of two values: x and y. Then create a find function that finds coordinates on the game board by passing in x and y (if no coordinate exists return null? undefined?). Then create a function that finds all possible coordinates for where the knight can go and stores them in an array (remember, they are references to actual coordinates in the game board).

```javascript
function checkLocation(coordinates) {
  if (coordinates.some((item) => item < 0 || item > 7)) {
    return null;
  }
  return coordinates;
}

function findMovesFrom(coordinates) {
  const locations = [];
  locations.push([]);
}

function findShortestArray(arrays) {
  return arrays.reduce((curr, prev) =>
    curr.length < prev.length ? curr : prev
  );
}

function knightMoves(start, end, path = []) {
  if (checkLocation(start) === null) {
    return null;
  }

  if (start.toString() === end.toString()) {
    return start;
  }

  return findShortestArray(
    knightMoves([start[0] + 1, start[1] + 3], end, path),
    knightMoves([start[0] - 1, start[1] + 3], end, path),
    knightMoves([start[0] + 1, start[1] - 3], end, path),
    knightMoves([start[0] - 1, start[1] - 3], end, path),
    knightMoves([start[0] + 3, start[1] + 1], end, path),
    knightMoves([start[0] - 3, start[1] + 1], end, path),
    knightMoves([start[0] + 3, start[1] + 1], end, path),
    knightMoves([start[0] - 3, start[1] + 1], end, path)
  );
}
```

This doesn't work (stack overflow).

Let's make the game board; an array of rows, each of which is a position object. The position object has a coordinates property and a possibleKnightMoves property. The possibleKnightMoves property is an array of other coordinates.

We need a find method on the game board so we can get a reference to the actual position.

Ok, we got it figured out...
