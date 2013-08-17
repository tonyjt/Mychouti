/**
 * Created with JetBrains WebStorm.
 * User: tony
 * Date: 13-8-17
 * Time: 下午4:47
 * To change this template use File | Settings | File Templates.
 */
var http = require("http");

function start()
{
    http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }).listen(10001);
}

exports.start = start;