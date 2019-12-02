const path = require('path');
const interpreter = require('./lib/interpreter');
const parsePuzzleInput = require('./lib/parsePuzzleInput');

const inputProgram = parsePuzzleInput(path.resolve(__dirname, './input.txt'));

inputProgram[1] = 12;
inputProgram[2] = 2;

const completeProgram = interpreter(inputProgram);
console.log(completeProgram[0]);