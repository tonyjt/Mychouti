/**
 * Created with JetBrains WebStorm.
 * User: tony
 * Date: 13-8-17
 * Time: 下午4:47
 * To change this template use File | Settings | File Templates.
 */

//mu.root = __dirname + "/views";

var express = require('express')
    ,route = require("./route.js");

var app = express();


function start()
{
    //route.route(app);
    route(app,{verbose:!module.parent});

    app.listen(10001);
}

exports.start = start;