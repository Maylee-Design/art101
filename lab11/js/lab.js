// index.js - JavaScript Events and Forms
// Author: Mason Hughes
// Date: 11/11/24


// Generates an anagram of a given string.
// credit to Wesmodes
function anagram(inputString) {
  // Convert the string to an array of characters
  const charArray = inputString.split('');
 
  // Use the Fisher-Yates (Knuth) shuffle algorithm to shuffle the characters
  for (let i = charArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  }
 
  // Join the shuffled characters back into a string
  const anagram = charArray.join('');
 
  // Return the generated anagram
  return anagram;
}

 
// given a string, return string in Title Case
// credit to ChatGPT
String.prototype.toTitleCase = function() {
  return this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};


// initilize counter variable 
// save the user_name in a variable 
// increment counter variable in the "submit event listener" 
// if counter variable == 3, then display original name of the user
//button counter



let buttonCounter = 0;
console.log (buttonCounter);
// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // now let's sort it
  newName = anagram(userName).toTitleCase();
  //output is user input on third submission
  if (buttonCounter >= 2) {
    $("#output").html('<div class="name-results">' + userName + '</div>');
    // For the button counter to restart after presssing button 3 times
    // buttonCounter = 0;
  }
  else {
    $("#output").html('<div class="name-results">' + newName + '</div>');
    //button counted
    buttonCounter += 1;
  }
});
 


