  var https = require('https');

  function getAndPrintHTML (options) {

  /* Add your code here */


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

  https.get(requestOptions, function (response) {
    console.log("What hell is going on here:", response)

    response.setEncoding('utf8');

      requestOptions = [];
      response.on('data', function (data) {
      requestOptions.push(data);
      console.log(requestOptions);

    });

    response.on('end', function() {
      console.log('Data Recived:', requestOptions.join(""));
      console.log('Response stream complete.');
    });

   });
  }

  getAndPrintHTML();