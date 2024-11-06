// index.js - working on jquery
// Author: Mason Hughes
// Date: Nov 4 2024





// add button to challenge section
// $("#challenge").append("<button id='button-challenge'>Don't Press Here....</button>");
// click listener on challenge button
// $("button-challenge").click(function(){
// add (or subtract) the "special" class to the section
//   $("#challenge").toggleClass("special");
// });



$("#challenge").append("<button class= 'button-challenge'> Don't press this button... </button>");
$("#problems").append("<button class = 'button-problems'> Don't press here either. </button>");
$("#reflections").append("<button class = 'button-reflections'> You clicked the other ones did't you. </button>");
$("#results").append("<button class ='button-results'> It's rude of you to click this button. </button>");
//appends a button
$(".button-challenge").click(function(){
  $(this).parent().toggleClass("special");
});

$(".button-problems").click(function(){
  $(this).parent().toggleClass("special");
});

$(".button-reflections").click(function(){
  $(this).parent().toggleClass("special");
});

$(".button-results").click(function(){
  $(this).parent().toggleClass("special");
});


// document.getElementById('petButton').click('click', function () {
//   const image = document.getElementById('petmee')
//   if (image.classList.contains('class1')) {
//     image.classList.remove('class1')
//     image.classList.add('class2')
//   } else {
//     image.classList.remove('class2')
//     image.classList.add('class1')
//   }
// })
