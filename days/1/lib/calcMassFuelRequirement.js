// To find the fuel required for a module (or fuel mass):
// 1. take its mass
// 2. divide by three
// 3. round down
// 4. and subtract 2.
module.exports = function calcMassFuelRequirement(mass) {
  const step2 = mass / 3;
  const step3 = Math.floor(step2);
  const step4 = step3 - 2;

  return step4;
};
