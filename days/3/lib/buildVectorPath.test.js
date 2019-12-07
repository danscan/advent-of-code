const buildVectorPath = require('./buildVectorPath');

test('correctly builds vector paths', () => {
  expect(buildVectorPath(['U2', 'R2', 'D2', 'L2'])).toEqual([
    '0,0',
    '0,-1', // U2
    '0,-2',
    '1,-2', // R2
    '2,-2',
    '2,-1', // D2
    '2,0',
    '1,0',  // L2
    '0,0',
  ]);
});