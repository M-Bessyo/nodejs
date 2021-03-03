// コンソールに改行無しで書き出す
// process.stdout.write("Hello");

// -----------------------------------------------------------

// クライアントからの情報を受け取る
// var http = require('http');
// var server = http.createServer(function(req, res) {
//     console.log("URL: " + req.url);
//     console.log("Method: " + req.method);
//     console.log("Header[Content-Type]: " + req.headers['content-type']);
//     res.end();
// }).listen(8080);

// -----------------------------------------------------------

// GETパラメータを受け取る
// var http = require('http');
// var url = require('url');

// var server = http.createServer(function(req, res) {
//     var url_parse = url.parse(req.url, true);
//     console.log(url_parse);
//     res.end();
// }).listen(8080);

// -----------------------------------------------------------

// POSTデータを受け取る（動かない...）
var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.method == 'POST') {
        var body = '';
        req.on('date', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            console.log(body);
            res.end();
        });
    }
}).listen(8080);
