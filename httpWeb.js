var http = require("http");
var url = require("url");
var uc = require("upper-case");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, {
//       "Content-type": "text/html",
//     });
//     res.write(req.url);
//     res.end();
//   })
//   .listen(4000);

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, {
//       "Content-type": "text/html",
//     });
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(3000);

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.write(uc.upperCase("hello world"));
    res.end();
  })
  .listen(3000);
