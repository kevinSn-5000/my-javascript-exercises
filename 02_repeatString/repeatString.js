const repeatString = function(string, num) {
    let stringExtra = "";
    for(let i = 0; i < num; i++){
        stringExtra = stringExtra + string
    }
    if(num < 0){
        return "ERROR"
    }
    else{
        return stringExtra;
    }
};
// Do not edit below this line
module.exports = repeatString;
