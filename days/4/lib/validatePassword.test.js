const validatePassword = require('./validatePassword');

it('validates correct passwords', () => {
  expect(validatePassword(334455)).toBe(true);
  expect(validatePassword(333445)).toBe(true);
  expect(validatePassword(288999)).toBe(true);
  expect(validatePassword(348899)).toBe(true);
  expect(validatePassword(345899)).toBe(true);
});

it('invalidates incorrect passwords due to decreasing digits', () => {
  // Rule 2 Passes = 4
  expect(validatePassword(334454)).toBe(false);
  expect(validatePassword(334454)).toBe(false);
  expect(validatePassword(344561)).toBe(false);
  expect(validatePassword(345561)).toBe(false);
  expect(validatePassword(345661)).toBe(false);
  expect(validatePassword(324467)).toBe(false);

  // Rule 2 Passes < 4
  expect(validatePassword(300011)).toBe(false);
  expect(validatePassword(333544)).toBe(false);
  expect(validatePassword(333244)).toBe(false);
});

it('invalidates incorrect passwords due to no doubles', () => {
  expect(validatePassword(345678)).toBe(false);
  expect(validatePassword(456789)).toBe(false);
});

it('invalidates incorrect passwords due to only doubles belonging to a longer repeating sequence', () => {
  expect(validatePassword(333333)).toBe(false);
  expect(validatePassword(333444)).toBe(false);
  expect(validatePassword(333456)).toBe(false);
  expect(validatePassword(345556)).toBe(false);
  expect(validatePassword(345666)).toBe(false);
});