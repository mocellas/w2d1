

var getHTML = require('./makeModule.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
console.log(getHTML);
getHTML(requestOptions, function (str){
  console.log(str);
})