// rule 1 = Digits can only increase from left to right
// rule 2 = The password must contain two consecutive repeat digits that are NOT part of a longer group of repeat digits
module.exports = function validatePassword(passwordNumber) {
  let onlyIncreasing = true;
  let twoAdjacent = false;

  for (let i = 0; i < password.length; i++) {
    const previousDigit = password[i - 1];
    const digit = password[i];
    const nextDigit = password[i + 1];
    const digitAfterNext = password[i + 2];

    if (previousDigit !== digit && digit === nextDigit && digit !== digitAfterNext) {
      twoAdjacent = true;
    }

    if (Number(digit) > Number(nextDigit)) {
      onlyIncreasing = false;
    }
  }

  return twoAdjacent && onlyIncreasing;
}
