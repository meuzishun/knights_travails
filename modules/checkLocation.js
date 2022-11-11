export function checkLocation(coordinates) {
  return coordinates.every((val) => val > -1 && val < 8);
}
