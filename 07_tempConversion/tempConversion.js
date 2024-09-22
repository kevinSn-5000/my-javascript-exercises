const convertToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32)/1.8;
    let result = Math.round(celsius * 10)/10;
    return result;
};

const convertToFahrenheit = function(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    let result = Math.round(fahrenheit * 10)/10;
    return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
