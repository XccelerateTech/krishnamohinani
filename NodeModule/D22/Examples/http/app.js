var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){
    
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/photo2.jpg'){
        fs.createReadStream(__dirname + '/photo2.jpg');
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');