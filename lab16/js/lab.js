
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

// index.js - purpose and description here
// Author: Your Name
// Date:

// Define the API endpoint
let endpoint = "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json"; // this is the URL of our API. for us, we're using a proxy server that allows us to bypass the CORS error that appears with the one in the lab.

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
    method: "GET", // HTTP methods
    dataType: "JSON", // Payload type

  success: function(data) { // Success handler
    comicObj = data;
    console.log(comicObj); 
    
    $("#output").append("<h1> Today's XKCD Comic is: "  + "<br>" + comicObj.title + "<br>" + "</h1>" + "<p title =" + JSON.stringify(comicObj.alt) + ">" + "<img src = " + comicObj.img + ">" );
  },

   
  error: function(xhr, status, error) { // Error handler
    console.error("error: this did not work"); 
  } 
};

// Send the AJAX request
$.ajax(ajaxConfig); 
