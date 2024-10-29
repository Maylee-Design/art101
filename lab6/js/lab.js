//index.js - Learning Javascript
// Author: Mason Hughes
//Date: 10.24.24//

// Variables
myTransport = ["ebike" , " nissan", " honda"]

//object
myMainRide = {
  make: "Nissan",
  model: "versa",
  color: "silver",
  year: "2010",
  //function in object
  age: function() {
      return 2024 - this.year;}
  }


//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
//write object to document
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");














// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
