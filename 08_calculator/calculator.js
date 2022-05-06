const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	array.reduce(a, b => a + b);
};

const multiply = function(array) {
  array.reduce(a, b => a * b);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  let storage = num;
	for (i = (num - 1); i > 0; i--) {
    storage *= i;
  };
  return storage;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
