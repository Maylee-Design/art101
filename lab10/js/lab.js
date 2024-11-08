// index.js - purpose and description here
// Author: Your Name
// Date:

function generateRandomMeow() {
  const text = "meow mewo meow,mow meow mewo meow meow";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the meow text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random meow-like text
  return text.slice(randStart, randStart + randLen);
  

  
  
};


var inputText=""
//event listener for enter key
$('#userInput').keypress(function(event) {
  if (event.which === 13) { // Enter key is pressed
    inputText = document.getElementById('userInput').value;
    if (inputText != "") {
      $('#make-convo').click();
    }
  }
});


// event listener for clicking and generating random meow
$("#make-convo").click(function(){
  inputText = document.getElementById('userInput').value;
  if (inputText != "") {
    const newText = generateRandomMeow();
    // appends what we wrote to the page
    $("#output").append($("#userInput").val() );
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    // Clear the input box
    $('#userInput').val('');
  }

});






// // click listener for button
// $("#make-convo").click(function(){
//   $(#make-convo).toggleClass("")
// });

// // get new fake dialogue
// const newText = generateRandomMeow();

// // append a new div to our output div
// $("#output").append('<div class="text"><p>' + newText + '</p></div>');


// $(document).ready(function() {
//   $('#typeButton').click(function() {
//       var inputText = $('#userInput').val();
//       if (inputText !== '') {
//           // Generate random text (you can customize this logic)
//           const text = "meow mewo meow,mow meow mewo meow meow";
//           const min = 3;
//           const max = 100;
//           const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
//     // Get a random starting index to slice the meow text
//         const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
//     // Generate the random meow-like text
//     // return text.slice(randStart, randStart + randLen);
//      $('#output').text(randomText);
//       }
//   });
// });