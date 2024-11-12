// index.js - JavaScript Events and Forms
// Author: Mason Hughes
// Date: 11/11/24

function sortString (inputString) {
  return inputString.split('').sort().join('');

}

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // now let's sort it
  userNameSorted = sortString(userName);
  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
// let's get this party started
main();
