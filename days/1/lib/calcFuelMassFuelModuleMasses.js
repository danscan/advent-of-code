const calcMassFuelRequirement = require('./calcMassFuelRequirement');

function calcFuelMassFuelModuleMasses(fuelMass, acc = []) {
  const fuelMassFuelModuleMass = calcMassFuelRequirement(fuelMass);

  if (fuelMassFuelModuleMass <= 0) {
    return acc;
  }

  return calcFuelMassFuelModuleMasses(fuelMassFuelModuleMass, [...acc, fuelMassFuelModuleMass]);
}

module.exports = calcFuelMassFuelModuleMasses;
