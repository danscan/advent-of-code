const path = require('path');
const parsePuzzleInput = require('./lib/parsePuzzleInput');
const calcPathsCombinedStepsToNearestCrossPositions = require('./lib/calcPathsCombinedStepsToNearestCrossPositions');

const [pathEntriesA, pathEntriesB] = parsePuzzleInput(path.resolve(__dirname, './input.txt'));

const steps = calcPathsCombinedStepsToNearestCrossPositions(pathEntriesA, pathEntriesB)

console.log(steps);