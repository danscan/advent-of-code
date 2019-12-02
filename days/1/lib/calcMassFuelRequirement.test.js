const calcMassFuelRequirement = require('./calcMassFuelRequirement');


test('calculates mass 12 to require fuel 2', () => {
  expect(calcMassFuelRequirement(12)).toBe(2);
});

test('calculates mass 14 to require fuel 2', () => {
  expect(calcMassFuelRequirement(14)).toBe(2);
});

test('calculates mass 21 to require fuel 5', () => {
  expect(calcMassFuelRequirement(21)).toBe(5);
});

test('calculates mass 1969 to require fuel 654', () => {
  expect(calcMassFuelRequirement(1969)).toBe(654);
});

test('calculates mass 100756 to require fuel 33583', () => {
  expect(calcMassFuelRequirement(100756)).toBe(33583);
});
