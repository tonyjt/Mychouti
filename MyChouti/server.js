/**
 * Created with JetBrains WebStorm.
 * User: tony
 * Date: 13-8-17
 * Time: 下午4:47
 * To change this template use File | Settings | File Templates.
 */
var http = require("http")
    ,mu   = require("./node_modules/mu2/lib/mu")
    ,util = require("util");

mu.root = __dirname + "/views";

var express = require('express');
var app = express();
var route = require("./route");

function start()
{
    /*
    http.createServer(function(request, response) {
       // response.writeHead(200, {"Content-Type": "text/plain"});

        //response.write("Hello World");
       // response.end();
        var stream = mu.compileAndRender('shared/index.html', {name: "john"});

        //response.pipe(stream);
        stream.pipe(response);

        stream.on('end', function() {
            response.end();
        });

    }).listen(10001);
    */

    route.route(app);
    app.listen(10001);
}

exports.start = start;