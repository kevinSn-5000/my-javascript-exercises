const sumAll = function(firstNum, secondNum) {
    let totalSum = 0;
    let startAt;
    let endAt;
    if((firstNum < 0 || secondNum < 0) || (Math.floor(firstNum) !== firstNum || Math.floor(secondNum) !== secondNum)){
        return "ERROR"
    }
    if(firstNum >= secondNum){
            startAt = secondNum;
            endAt = firstNum;
    }
    else if(secondNum >= firstNum){
            startAt = firstNum;
            endAt = secondNum; 
    }

    for(startAt; startAt <= endAt; startAt++){
        totalSum += startAt;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
