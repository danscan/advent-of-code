const buildVectorPath = require('./buildVectorPath');
const findPathArrayCrossPositions = require('./findPathArrayCrossPositions');

test('correctly builds vector paths', () => {
  const pathArrayA = buildVectorPath(['R8', 'U5', 'L5', 'D3']);
  const pathArrayB = buildVectorPath(['U7', 'R6', 'D4', 'L4']);

  expect(findPathArrayCrossPositions(pathArrayA, pathArrayB))
    .toEqual(expect.arrayContaining([
      '3,-3',
      '6,-5',
    ]));
});