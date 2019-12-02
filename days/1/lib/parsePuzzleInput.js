const { readFileSync } = require('fs');
const { resolve: resolvePath } = require('path');

module.exports = function parsePuzzleInput(filepath) {
  const inputRowsString = readFileSync(filepath, { encoding: 'utf8' });
  const inputRows = inputRowsString.split('\n');
  const moduleMasses = inputRows.map(massString => Number(massString));

  return moduleMasses;
}
