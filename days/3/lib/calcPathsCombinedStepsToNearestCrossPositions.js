const buildVectorPath = require('./buildVectorPath');
const findPathArrayCrossPositions = require('./findPathArrayCrossPositions');

module.exports = function calcPathsCombinedStepsToNearestCrossPositions(pathEntriesA, pathEntriesB) {
  const pathPositionsArrayA = buildVectorPath(pathEntriesA);
  const pathPositionsArrayB = buildVectorPath(pathEntriesB);

  const crossPositions = findPathArrayCrossPositions(pathPositionsArrayA, pathPositionsArrayB);
  
  const combinedStepsToCrossPositions = crossPositions.map(crossPosition => {
    const pathASteps = pathPositionsArrayA.indexOf(crossPosition);
    const pathBSteps = pathPositionsArrayB.indexOf(crossPosition);

    return pathASteps + pathBSteps;
  });

  const sortedCombinedStepsToCrossPositions = combinedStepsToCrossPositions
    .sort((a, b) => a - b);

  return sortedCombinedStepsToCrossPositions[0];
}
