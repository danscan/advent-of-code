const pathPositionFromString = require('./pathPositionFromString');

test('correctly parses path positions from strings', () => {
  expect(pathPositionFromString('21,0')).toEqual([21,0]);
  expect(pathPositionFromString('0,-571')).toEqual([0,-571]);
  expect(pathPositionFromString('0,40')).toEqual([0,40]);
  expect(pathPositionFromString('-121,0')).toEqual([-121,0]);
  expect(pathPositionFromString('-31,26')).toEqual([-31,26]);
  expect(pathPositionFromString('48,-9')).toEqual([48,-9]);
});
