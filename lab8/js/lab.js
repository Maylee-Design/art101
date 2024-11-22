// Lab 8
// Author: Mason Hughes
// Date: 10/31/24



// Constants
someNumbers = [10, 42, 67, 300, 45]


// Functions
function doSomeCalculations (x) {
  var results = Math.sqrt(x)
  return results;
  }
  

// console log additions
  console.log(someNumbers.map(function(number) {
    var results = number * 3
    return results;
}));

  var mapResults = someNumbers.map(doSomeCalculations);

  console.log("results: ", mapResults)  



    



















