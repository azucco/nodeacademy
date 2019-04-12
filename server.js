var http = require('http'); // queste sono le librerie di NodeJs (MODULI) e vengono caricate con il metodo require().
var url = require("url");
var mymodule = require("mymodule");

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    mymodule.sayHello();
    
    codice = 200;

    if (page == '/info') {
        msg = 'About';
    } else if (page == '/') {
        msg = 'Home';
    }else {
        msg = 'Pagina non trovata';
        codice = 404;
    }
    res.writeHead(codice, {"Content-Type": "text/plain"});
    res.write(msg);
    res.end();
  });
server.listen(8080);

/*
var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text-html"});
  res.write('<!DOCTYPE html>'+
  '<html>'+
  ' <head>'+
  ' <meta charset="utf-8" />'+
  ' <title>Pagina Node.js!</title>'+
  ' </head>'+
  ' <body>'+
  '  <p>Sono un paragrafo <strong>HTML</strong>!</p>'+
  ' </body>'+
  '</html>');
  res.end();
});
server.listen(8080);
*/