var http = require("http");
var dt = require("./myModule");

http
  .createServer(function (res, req) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.write("The Date and time are currently:- " + dt.myDate());
    res.readableEnded();
  })
  .listen(3000);
