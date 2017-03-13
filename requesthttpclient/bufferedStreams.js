// import https library
var https = require('https');

var getAndPrintHTML = function() {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

    /* Add your code here */
    var appendChunks = "";

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(requestOptions, function (response) {
    console.log(response.statusCode);

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
      response.on('data', function (data) {
      console.log(1);
      console.log('Chunk Received. Length:' + "\n", data);
      appendChunks += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log('What is inside of the appendChunks', appendChunks);
    });
  });
}
//invoke the function
getAndPrintHTML();
