const { readFileSync } = require('fs');
const { resolve: resolvePath } = require('path');

module.exports = function parsePuzzleInput(filepath) {
  const pathEntriesString = readFileSync(filepath, { encoding: 'utf8' });
  const pathEntries = pathEntriesString
    .split('\n')
    .map(wirePathString => wirePathString.split(','));

  return pathEntries;
}
