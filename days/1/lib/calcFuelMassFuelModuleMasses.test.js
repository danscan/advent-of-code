const calcFuelMassFuelModuleMasses = require('./calcFuelMassFuelModuleMasses');

test('calculates mass 14 to require fuel modules [2]', () => {
  expect(calcFuelMassFuelModuleMasses(14)).toEqual([2]);
});

test('calculates mass 1969 to require fuel modules [654, 216, 70, 21, 5]', () => {
  expect(calcFuelMassFuelModuleMasses(1969)).toEqual([654, 216, 70, 21, 5]);
});

test('calculates mass 100756 to require fuel modules [33583, 11192, 3728, 1240, 411, 135, 43, 12, 2]', () => {
  expect(calcFuelMassFuelModuleMasses(100756)).toEqual([33583, 11192, 3728, 1240, 411, 135, 43, 12, 2]);
});

test('calculates mass 21 to require fuel modules []', () => {
  expect(calcFuelMassFuelModuleMasses(21)).toEqual([5]);
});

