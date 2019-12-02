const interpreter = require('./interpreter');

// 1,9,10,3,2,3,11,0,99,30,40,50
// -> 3500,9,10,70,2,3,11,0,99,30,40,50
test('correctly interprets fixture program 1', () => {
  expect(interpreter([1,9,10,3,2,3,11,0,99,30,40,50])).toEqual([3500,9,10,70,2,3,11,0,99,30,40,50]);
});

// (1 + 1 = 2)
// 1,0,0,0,99
// -> 2,0,0,0,99
test('correctly interprets fixture program 2 (1 + 1 = 2)', () => {
  expect(interpreter([1,0,0,0,99])).toEqual([2,0,0,0,99]);
});

// (3 * 2 = 6)
// 2,3,0,3,99
// -> 2,3,0,6,99
test('correctly interprets fixture program 3 (3 * 2 = 6)', () => {
  expect(interpreter([2,3,0,3,99])).toEqual([2,3,0,6,99]);
});

// (99 * 99 = 9801)
// 2,4,4,5,99,0
// -> 2,4,4,5,99,9801
test('correctly interprets fixture program 4 (99 * 99 = 9801)', () => {
  expect(interpreter([2,4,4,5,99,0])).toEqual([2,4,4,5,99,9801]);
});

// 1,1,1,4,99,5,6,0,99
// -> 30,1,1,4,2,5,6,0,99
test('correctly interprets fixture program 5', () => {
  expect(interpreter([1,1,1,4,99,5,6,0,99])).toEqual([30,1,1,4,2,5,6,0,99]);
});
