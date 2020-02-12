'use strict';
var http = require('http');
var port = process.env.PORT || 80;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.send('<h1>Hello World</h1>');
}).listen(port, _cb => {
    console.log('started on port: ' + port);
});
;
