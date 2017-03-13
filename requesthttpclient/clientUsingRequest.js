var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
    .on('error', (err) => {
        console.err(err)
    })
    .on('response',(response) => {
        console.log('Responde code:', response.statusCode);
        console.log('Content Type:', response.headers['content-type']);
    }).pipe(fs.createWriteStream('./future.jpg'));