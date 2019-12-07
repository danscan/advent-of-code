const path = require('path');
const buildVectorPath = require('./lib/buildVectorPath');
const parsePuzzleInput = require('./lib/parsePuzzleInput');
const pathPositionFromString = require('./lib/pathPositionFromString');
const pathPositionToString = require('./lib/pathPositionToString');
const findPathSetCrossPositions = require('./lib/findPathSetCrossPositions');

const puzzleInput = parsePuzzleInput(path.resolve(__dirname, './input.txt'));
const [pathSetA, pathSetB] = puzzleInput.map(buildVectorPath);

const crossPositions = findPathSetCrossPositions(pathSetA, pathSetB);

// –
// Helpers
// –
const numberSortCompare = (a, b) => a - b;

// Part One
const sortedCrossPositionsDistances = crossPositions
  .map(crossPositionString => {
    const [x, y] = pathPositionFromString(crossPositionString);
    return Math.abs(x) + Math.abs(y);
  })
  .sort(numberSortCompare);

const partOneAnswer = sortedCrossPositionsDistances[0];

console.log(partOneAnswer);