const path = require('path');
const parsePuzzleInput = require('./parsePuzzleInput');

test('parses a utf8 file containing a row of number strings to an array of numbers', () => {
  expect(parsePuzzleInput(path.resolve(__dirname, './parsePuzzleInput.test.fixture'))).toEqual([100, 256, 470]);
});
