// import https library
var https = require('https');

var getAndPrintHTMLChunks = function() {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

    /* Add your code here */

    // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(requestOptions, function (response) {
    console.log(response.statusCode);

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log(1);
      console.log('Chunk Received. Length:' + "\n", data.length);
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}
//invoke the function
getAndPrintHTMLChunks();