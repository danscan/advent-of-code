const pathPositionToString = require('./pathPositionToString');

test('correctly stringifies path positions to strings', () => {
  expect(pathPositionToString([21,0])).toBe('21,0');
  expect(pathPositionToString([0,-571])).toBe('0,-571');
  expect(pathPositionToString([0,40])).toBe('0,40');
  expect(pathPositionToString([-121,0])).toBe('-121,0');
  expect(pathPositionToString([-31,26])).toBe('-31,26');
  expect(pathPositionToString([48,-9])).toBe('48,-9');
});
