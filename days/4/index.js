const validatePassword = require('./lib/validatePassword');

const RANGE = [284639, 748759];

let validPasswords = [];

for (let i = RANGE[0]; i <= RANGE[1]; i = i + 1) {
  console.log(i);
  if (validatePassword(String(i))) {
    console.log('VALID!');
    validPasswords.push(i);
  }
}

console.log('validPasswords:');
console.log(validPasswords);
console.log(validPasswords.length);
