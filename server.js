var http = require('http'); //like installing Jquery or Angular - bringing in code someone else wrote.
var abFabQuotes = require('./abFabQuotes');
var randomQuoteNumber;

 http.createServer(function(request, response) { //create a server and pass it a function with 2 parameters whenever A REQUEST COMES IN.
 response.writeHead(200, { "Content-type": "text/html" }); //(status code & headers here) this is the info sent in the header - content-type is a common header - tells Chrome that content is plain text. 200 is status code OK.
 response.write('<h1>' + 'Enjoy A Random AbFab Quote!' + '<h1>' + randomQuote());  //this is the body - the plain text content of the request!
 response.end(); //must include an end to the server response/request
 }).listen(8888); //telling it what port to listen on//

    function randomQuote() {
      return abFabQuotes.abFabQuotes[Math.floor(Math.random() * 8)];

    };

    console.log(randomQuote());
