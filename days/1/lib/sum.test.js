const sum = require('./sum');

test('sums 0 + 1 + 2 to 3', () => {
  expect(sum([0, 1, 2])).toBe(3);
});

test('sums 5 + 11 + 22 + 35 to 73', () => {
  expect(sum([5, 11, 22, 35])).toBe(73);
});
