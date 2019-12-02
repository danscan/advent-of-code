const { readFileSync } = require('fs');
const { resolve: resolvePath } = require('path');

module.exports = function parsePuzzleInput(filepath) {
  const programString = readFileSync(filepath, { encoding: 'utf8' });
  const program = programString
    .split(',')
    .map(massString => Number(massString));

  return program;
}
