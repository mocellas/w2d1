var https = require('https');

module.exports = abs
function abs (options, callback) {

    https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    output = [];
    response.on('data', function (data) {
      output.push(data);
      //console.log(output);
    });

    response.on('end', function() {
      //console.log('Data Received:', output.join(""));
      //console.log('Response stream complete.', abs);
      callback(output.join(""));
    });
  });
};
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
abs(requestOptions, function(str){
  //console.log(str);
});

