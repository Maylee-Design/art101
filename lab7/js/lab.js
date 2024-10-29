//index.js - Learning Javascript
// Author: Mason Hughes
//Date: 10.28.24//


// Functions

function nameTag () {
  var userName = window.prompt("Hi! Can I make something new with your name?");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// remember that fuction can be condensed to userName.toLower().split(" ").sort().join(" ")
/*
function nameTag () {
  var userName = window.prompt("Hi! Can I make something new with your name?");
  console.log("userName =", userName);
  userName.toLower() .split(" ") .sort() .join(" ");
  return userName;
}
*/
document.writeln("What do you think bout it now? " + nameTag() + "</br>")



// this is an example function and this comment tells what it doees and what parameters are passed to it.
//function myFunction(param1, param2) {
  // some code here
  // return results;
//}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  nameTag();
}

main();
