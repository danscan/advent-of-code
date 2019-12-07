const last = require('lodash/last');
const times = require('lodash/times');
const pathEntryToVector = require('./pathEntryToVector2D');
const pathPositionToString = require('./pathPositionToString');

module.exports = function buildVectorPath(pathEntries) {
  const pathVectors = pathEntries.map(pathEntryToVector);
  const pathPositions = pathVectors
    .reduce((acc, [vectorX, vectorY]) => {
      const [positionX, positionY] = last(acc);
      const steps = Math.abs(vectorX || vectorY);
      const isNegative = (vectorX || vectorY) < 0;
      const operation = isNegative
        ? (a, b) => a - b
        : (a, b) => a + b;
      const interStepPositions = times(steps, (step) => {
        const stepX = vectorX ? step + 1 : 0;
        const stepY = vectorY ? step + 1 : 0;
        
        return [
          operation(positionX, stepX),
          operation(positionY, stepY),
        ];
      });

      return [...acc, ...interStepPositions];
    }, [[0, 0]]);
  const pathPositionStrings = pathPositions.map(pathPositionToString);
  
  return pathPositionStrings;
}
