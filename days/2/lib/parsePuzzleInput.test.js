const path = require('path');
const parsePuzzleInput = require('./parsePuzzleInput');

test('parses a utf8 file containing comma separated number strings to an array of numbers', () => {
  expect(parsePuzzleInput(path.resolve(__dirname, './parsePuzzleInput.test.fixture'))).toEqual([1, 2, 3, 4]);
});
