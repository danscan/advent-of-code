module.exports = function findPathSetCrossPositions(pathSetA, pathSetB) {
  return Array.from(pathSetA)
    .filter(entry => pathSetB.has(entry))
    .filter(entry => entry !== '0,0');
};
