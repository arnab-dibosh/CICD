'use strict';
var http = require('http');
var port = process.env.PORT || 80;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{ "message": "Hello World from cicd", "port": ' + port + ' }');
}).listen(port, _cb => {
    console.log('started on port: ' + port);
});
;
