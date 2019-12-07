const buildVectorPath = require('./buildVectorPath');
const findPathSetCrossPositions = require('./findPathSetCrossPositions');

test('correctly builds vector paths', () => {
  const pathSetA = buildVectorPath(['R8', 'U5', 'L5', 'D3']);
  const pathSetB = buildVectorPath(['U7', 'R6', 'D4', 'L4']);

  expect(findPathSetCrossPositions(pathSetA, pathSetB))
    .toEqual(expect.arrayContaining([
      '3,-3',
      '6,-5',
    ]));
});