const removeFromArray = function(array, ...deleted) {
  //deletes duplicate elements
    let newArray = [...new Set(array)];

    for(let deleteNumber of deleted){
      for(let i = 0; i < newArray.length; i++){
          if(deleteNumber === newArray[i]){
             newArray.splice(i,1)
             continue;
           }
          else{
              continue;
           }
      }
    }

    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
