// Lab 8
// Author: Mason Hughes
// Date: 10/31/24

// Constants
const someNumbers = [10, 42, 67, 300, 45]


// Functions
function doSomeCalculations (number) {
  var results = Math.sqrt(number)
  return results;
  }
  

// console log additions
  someNumbers.map(function (x){
    var results = x*3
    return results;
})

  var mapresults = someNumbers.map(doSomeCalculations);
    console.log("results: ", mapresults)














