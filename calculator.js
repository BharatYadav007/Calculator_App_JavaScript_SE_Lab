const readline = require('readline');

const add = require('./addition');
const subtract = require('./subtraction');
const multiply = require('./multiply');
const divide = require('./division');
const advanced = require('./advanced');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const history = [];

const operations = {
  '+': { args: 2, run: add, label: 'Addition' },
  '-': { args: 2, run: subtract, label: 'Subtraction' },
  '*': { args: 2, run: multiply, label: 'Multiplication' },
  '/': { args: 2, run: divide, label: 'Division' },
  '^': { args: 2, run: advanced.power, label: 'Power' },
  '%': { args: 2, run: advanced.percentage, label: 'Percentage' },
  mod: { args: 2, run: advanced.modulo, label: 'Modulo' },
  sqrt: { args: 1, run: advanced.squareRoot, label: 'Square Root' },
  cbrt: { args: 1, run: advanced.cubeRoot, label: 'Cube Root' },
  fact: { args: 1, run: advanced.factorial, label: 'Factorial' },
  log: { args: 1, run: (a) => advanced.logarithm(a, 10), label: 'Log base 10' },
  ln: { args: 1, run: advanced.naturalLog, label: 'Natural Log' },
  sin: { args: 1, run: (a) => advanced.sin(a, 'deg'), label: 'Sine (degrees)' },
  cos: { args: 1, run: (a) => advanced.cos(a, 'deg'), label: 'Cosine (degrees)' },
  tan: { args: 1, run: (a) => advanced.tan(a, 'deg'), label: 'Tangent (degrees)' },
  abs: { args: 1, run: advanced.absolute, label: 'Absolute Value' },
  recip: { args: 1, run: advanced.reciprocal, label: 'Reciprocal' },
  d2r: { args: 1, run: advanced.degreesToRadians, label: 'Degrees to Radians' },
  r2d: { args: 1, run: advanced.radiansToDegrees, label: 'Radians to Degrees' },
};

function question(text) {
  return new Promise((resolve) => rl.question(text, resolve));
}

function showMenu() {
  console.log(`\n================ ADVANCED CALCULATOR ================
Basic:
  +      Addition              -      Subtraction
  *      Multiplication        /      Division

Advanced:
  ^      Power                 %      Percentage
  mod    Modulo                sqrt   Square root
  cbrt   Cube root             fact   Factorial
  log    Log base 10           ln     Natural log
  sin    Sine (degrees)        cos    Cosine (degrees)
  tan    Tangent (degrees)     abs    Absolute value
  recip  Reciprocal            d2r    Degrees -> radians
  r2d    Radians -> degrees

Other:
  history  Show calculation history
  clear    Clear calculation history
  exit     Exit calculator
=====================================================`);
}

function parseNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) throw new Error('Please enter a valid finite number.');
  return number;
}

async function calculate() {
  showMenu();

  while (true) {
    try {
      const choice = (await question('\nChoose operation: ')).trim().toLowerCase();

      if (choice === 'exit') break;

      if (choice === 'history') {
        if (history.length === 0) console.log('No calculations yet.');
        else history.forEach((item, index) => console.log(`${index + 1}. ${item}`));
        continue;
      }

      if (choice === 'clear') {
        history.length = 0;
        console.log('History cleared.');
        continue;
      }

      const operation = operations[choice];
      if (!operation) {
        console.log('Unknown operation. Please choose one from the menu.');
        continue;
      }

      const first = parseNumber(await question('Enter first number: '));
      let result;
      let expression;

      if (operation.args === 2) {
        const second = parseNumber(await question('Enter second number: '));
        result = operation.run(first, second);
        expression = `${operation.label}: ${first}, ${second} = ${result}`;
      } else {
        result = operation.run(first);
        expression = `${operation.label}: ${first} = ${result}`;
      }

      history.push(expression);
      console.log(`Result: ${result}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  console.log('Calculator closed.');
  rl.close();
}

calculate();
