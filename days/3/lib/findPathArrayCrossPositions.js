module.exports = function findPathArrayCrossPositions(pathArrayA, pathArrayB) {
  return Array.from(pathArrayA)
    .filter(entry => pathArrayB.indexOf(entry) >= 0)
    .filter(entry => entry !== '0,0');
};
