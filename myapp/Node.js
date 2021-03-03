// ExpressでGET POSTを処理する
// var express = require('express');
// var app = express();
// app.listen(8080);

// app.get('/test1', function(req, res) {
//     res.send('TEST1\n');
// });

// app.post('/test2', function(req, res) {
//     res.send('TEST2\n');
// });

// ------------------------------------------------------

// ExpressでPOSTデータを受け取る
// 古い書き方 bodyDecoder時代
// app.use(express.bodyDecoder());

// // 古い書き方 bodyParser時代
// app.use(express.bodyParser());

// // 古い書き方 urlencoded時代
// app.use(express.urlencoded());
// app.use(express.json());

// 現時点の書き方（2018年1月7日）body-parser時代
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));

// ------------------------------------------------------

// RAWデータを受け取る
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.raw({ type: '*/*' }));

// app.post('/', function(req, res) {
//     console.log(req.body);
//     res.end();
// });
// app.listen(8080);

// ------------------------------------------------------

// TEXTデータを受け取る
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.text({ type: '*/*'}));

// app.post('/', function(req, res) {
//     console.log(req.body);
//     res.end();
// });
// app.listen(8080);

// ------------------------------------------------------

// FORMデータを受け取る
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/', function(req, res) {
//     for (key in req.body) {
//         console.log(key, '=', req.body[key]);
//     }
//     res.end();
// });
// app.listen(8080);

// ------------------------------------------------------

// JSONデータを受け取る
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());

// app.post('/', function(req, res) {
//     for (key in req.body) {
//         console.log(key, '=', req.body[key]);
//     }
//     res.end();
// });
// app.listen(8080);

// ------------------------------------------------------

// EJSテンプレートエンジンを用いる
// var fs = require('fs');
// var ejs = require('ejs');
// var template = fs.readFileSync('./views/test.ejs', 'utf8');

// var buf = ejs.render(template, {
//     title: "EJS Sample Code",
//     content: "This is EJS Sample..."
// });
// console.log(buf);

// ------------------------------------------------------

// app.engine()を用いて標準レンダリングエンジンに指定する場合
// var express = require('express');
// var app = express();
// var ejs = require('ejs');
// app.engine('ejs', ejs.renderFile);
// app.get('/', function(req, res) {
//     res.render('test.ejs', {
//         title: "EJS Sample Code",
//         content: "This is EJS Sample..."
//     });
// });
// app.listen(8080);

// ------------------------------------------------------

// ファイルをノンブロッキングで読み出す
// var fs = require("js");

// fs.readFile("./data.dat", "utf8", function(err, data) {
//     console.log(data);
// });

// ------------------------------------------------------

// モジュールを作成する
// var mymod = require('./mymod');
// console.log(mymod.hello());

// ------------------------------------------------------

// 文字列中の変数を展開する
const PORT = 8080;
console.log(`localhost:${PORT}`);