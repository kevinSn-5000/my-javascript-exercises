const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentNumber) =>  total + currentNumber, 0)
};

  

const multiply = function(array) {
  return array.reduce((total, currentNumber) => total * currentNumber)
};

const power = function(a, b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
  let factorial = 1;
	for(let i = a; i > 0; i--){
    factorial = factorial * i;
  }
  return factorial;
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
