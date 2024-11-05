const fibonacci = function(fibonacciPosition) {
    fibonacciPosition = +fibonacciPosition;
    if(fibonacciPosition < 0) return "OOPS"
    let array = [0, 1];
    for(let i = 2; i <= fibonacciPosition; i++){
        array[i] = array[i-1] + array[i-2];
    }
    return array[fibonacciPosition];
};

// Do not edit below this line
module.exports = fibonacci;
