module.exports = function pathPositionFromString(positionString) {
  return positionString
    .split(',')
    .map(entry => Number(entry));
}
