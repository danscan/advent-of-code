const OPCODE_ADD = 1;
const OPCODE_MULTIPLY = 2;
const OPCODE_EXIT = 99;

module.exports = function intcodeInterpreter(
  memory,
  instructionPointer = 0,
) {
  const opcode = memory[instructionPointer];

  switch (opcode) {
    case OPCODE_ADD:
      mutativeInfixOperation(
        memory,
        instructionPointer,
        (a, b) => a + b,
      );
      break;

    case OPCODE_MULTIPLY:
      mutativeInfixOperation(
        memory,
        instructionPointer,
        (a, b) => a * b,
      );
      break;

    case OPCODE_EXIT:
    default:
      return memory;
  }

  return intcodeInterpreter(memory, instructionPointer + 4);
}

function mutativeInfixOperation(
  memory,
  instructionPointer,
  operator,
) {
  const operandPositionA = memory[instructionPointer + 1];
  const operandPositionB = memory[instructionPointer + 2];
  const resultWritePosition = memory[instructionPointer + 3];
  const [operandA, operandB] = [
    memory[operandPositionA],
    memory[operandPositionB],
  ];

  memory[resultWritePosition] = operator(operandA, operandB);
}