const path = require('path');
const calcMassFuelRequirement = require('./lib/calcMassFuelRequirement');
const calcFuelMassFuelModuleMasses = require('./lib/calcFuelMassFuelModuleMasses');
const parsePuzzleInput = require('./lib/parsePuzzleInput');
const sum = require('./lib/sum');

const moduleMasses = parsePuzzleInput(path.resolve(__dirname, './input.txt'));
const moduleFuelRequirements = moduleMasses.map(moduleMass => {
  const fuelRequirement = calcMassFuelRequirement(moduleMass);
  const fuelFuelRequirementsArray = calcFuelMassFuelModuleMasses(fuelRequirement);
  const fuelFuelRequirement = sum(fuelFuelRequirementsArray);

  return fuelRequirement + fuelFuelRequirement;
});

const totalFuelRequirement = sum(moduleFuelRequirements);

console.log(totalFuelRequirement);
