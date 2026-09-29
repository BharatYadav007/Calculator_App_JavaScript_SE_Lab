function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(value) {
  if (value < 0) throw new Error('Square root of a negative number is not a real number.');
  return Math.sqrt(value);
}

function cubeRoot(value) {
  return Math.cbrt(value);
}

function percentage(value, percent) {
  return (value * percent) / 100;
}

function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero is not allowed.');
  return a % b;
}

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Factorial is defined only for non-negative integers.');
  }

  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

function logarithm(value, base = 10) {
  if (value <= 0 || base <= 0 || base === 1) {
    throw new Error('Invalid value or logarithm base.');
  }
  return Math.log(value) / Math.log(base);
}

function naturalLog(value) {
  if (value <= 0) throw new Error('Natural log requires a positive number.');
  return Math.log(value);
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

function sin(value, unit = 'deg') {
  const radians = unit === 'deg' ? degreesToRadians(value) : value;
  return Math.sin(radians);
}

function cos(value, unit = 'deg') {
  const radians = unit === 'deg' ? degreesToRadians(value) : value;
  return Math.cos(radians);
}

function tan(value, unit = 'deg') {
  const radians = unit === 'deg' ? degreesToRadians(value) : value;
  return Math.tan(radians);
}

function absolute(value) {
  return Math.abs(value);
}

function reciprocal(value) {
  if (value === 0) throw new Error('Cannot calculate reciprocal of zero.');
  return 1 / value;
}

module.exports = {
  power,
  squareRoot,
  cubeRoot,
  percentage,
  modulo,
  factorial,
  logarithm,
  naturalLog,
  sin,
  cos,
  tan,
  absolute,
  reciprocal,
  degreesToRadians,
  radiansToDegrees,
};
