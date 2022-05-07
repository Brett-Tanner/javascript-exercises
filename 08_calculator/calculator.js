const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const sum = array.reduce(function(a, b) {
    return a += b;
  }, 0);
  return sum;
};

const multiply = function(array) {
  const sum = array.reduce(function(a, b) {
    return a *= b;
  }, 1);
  return sum;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  let storage = 1;
  if (num === 0) {
    return 1;
  }
  else {
    for (i = 1; i <= num; i++) {
      storage *= i;
    };
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
