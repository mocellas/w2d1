var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    requestOptions = [];
    response.on('data', function (data) {
      requestOptions.push(data);
      console.log(requestOptions);
    });

    response.on('end', function() {
      console.log('Data Received:', requestOptions.join(""));
      console.log('Response stream complete.', printHTML);
    });
  });
}

function printHTML (html) {
  console.log(html);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML();
