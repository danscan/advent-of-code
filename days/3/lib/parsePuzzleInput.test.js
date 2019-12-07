const path = require('path');
const parsePuzzleInput = require('./parsePuzzleInput');

// R1,D2,L3,D4,U5
// L1,U2,R3,D4,L5
test('parses a utf8 file containing rows of comma separated number path entries', () => {
  const parsedInput = parsePuzzleInput(path.resolve(__dirname, './parsePuzzleInput.test.fixture'));

  expect(parsedInput[0]).toEqual(['R1','D2','L3','D4','U5']);
  expect(parsedInput[1]).toEqual(['L1','U2','R3','D4','L5']);
});
