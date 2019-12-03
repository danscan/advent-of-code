const path = require('path');
const interpreter = require('./lib/interpreter');
const parsePuzzleInput = require('./lib/parsePuzzleInput');

const initialMemoryState = parsePuzzleInput(path.resolve(__dirname, './input.txt'));

function runProgram(noun, verb) {
  // make copy of input memory state
  const memory = [...initialMemoryState];

  // apply params
  memory[1] = noun;
  memory[2] = verb;

  const [output] = interpreter(memory);

  return output;
}

// brute force combinations of noun and verb (integers 0..99, inclusive)
for(let noun = 0; noun < 100; noun++) {
  for(let verb = 0; verb < 100; verb++) {
    if (runProgram(noun, verb) === 19690720) {
      console.log(100 * noun + verb);
      process.exit(0);
    }
  }
}