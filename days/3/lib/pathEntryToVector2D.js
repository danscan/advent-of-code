// Direction number -> Vector2d
const U = number => [0, -number]; // Up
const R = number => [number, 0]; // Right
const D = number => [0, number]; // Down
const L = number => [-number, 0]; // Left

const directions = { U, R, D, L };

module.exports = function pathEntryToVector2D(pathEntry) {
  const directionKey = pathEntry[0];
  const number = Number(pathEntry.slice(1));
  
  return directions[directionKey](number);
}
