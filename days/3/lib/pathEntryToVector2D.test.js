const pathEntryToVector2D = require('./pathEntryToVector2D');

test('correctly maps up entries', () => {
  expect(pathEntryToVector2D('U0')).toEqual([0, -0]);
  expect(pathEntryToVector2D('U11')).toEqual([0, -11]);
  expect(pathEntryToVector2D('U40')).toEqual([0, -40]);
  expect(pathEntryToVector2D('U-31')).toEqual([0, 31]);
});

test('correctly maps right entries', () => {
  expect(pathEntryToVector2D('R1')).toEqual([1, 0]);
  expect(pathEntryToVector2D('R4')).toEqual([4, 0]);
  expect(pathEntryToVector2D('R571')).toEqual([571, 0]);
  expect(pathEntryToVector2D('R-31')).toEqual([-31, 0]);
});

test('correctly maps down entries', () => {
  expect(pathEntryToVector2D('D1')).toEqual([0, 1]);
  expect(pathEntryToVector2D('D11')).toEqual([0, 11]);
  expect(pathEntryToVector2D('D40')).toEqual([0, 40]);
  expect(pathEntryToVector2D('D-31')).toEqual([0, -31]);
});

test('correctly maps left entries', () => {
  expect(pathEntryToVector2D('L1')).toEqual([-1, 0]);
  expect(pathEntryToVector2D('L4')).toEqual([-4, 0]);
  expect(pathEntryToVector2D('L571')).toEqual([-571, 0]);
  expect(pathEntryToVector2D('L-31')).toEqual([31, 0]);
});