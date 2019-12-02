const OPCODE_ADD = 1;
const OPCODE_MULTIPLY = 2;
const OPCODE_EXIT = 99;

module.exports = function intcodeInterpreter(
  program,
  currentPosition = 0,
) {
  console.log('currentPosition:', currentPosition);
  const opcode = program[currentPosition];
  console.log('opcode:', opcode);

  switch (opcode) {
    case OPCODE_ADD:
      console.log('add');
      mutativeProgramInfixOperation(
        program,
        currentPosition,
        (a, b) => a + b,
      );
      break;

    case OPCODE_MULTIPLY:
      console.log('multiply');
      mutativeProgramInfixOperation(
        program,
        currentPosition,
        (a, b) => a * b,
      );
      break;

    case OPCODE_EXIT:
    default:
      console.log('exit... program', program);
      return program;
  }

  return intcodeInterpreter(program, currentPosition + 4);
}

function mutativeProgramInfixOperation(
  program,
  currentPosition,
  operator,
) {
  const operandPositionA = program[currentPosition + 1];
  const operandPositionB = program[currentPosition + 2];
  const resultWritePosition = program[currentPosition + 3];
  const [operandA, operandB] = [
    program[operandPositionA],
    program[operandPositionB],
  ];
  console.log('resultWritePosition:', resultWritePosition);
  console.log('operandA:', operandA);
  console.log('operandB:', operandB);

  program[resultWritePosition] = operator(operandA, operandB);
}