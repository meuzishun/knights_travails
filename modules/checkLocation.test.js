import { checkLocation } from './checkLocation.js';

test('checkLocation returns false when the location is off the board', () => {
  expect(checkLocation([3, 9])).toBe(false);
});

test('checkLocation returns true when the location is on the board', () => {
  expect(checkLocation([3, 7])).toBe(true);
});
