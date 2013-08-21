/**
 * Created with JetBrains WebStorm.
 * User: tony
 * Date: 13-8-20
 * Time: 下午11:07
 * To change this template use File | Settings | File Templates.
 */
//var mu   = require("./node_modules/mu2/lib/mu");

//mu.root = __dirname + "/views";
  var route = require("./libs/route.js")  ;

var routingTable={
    home:1
};

function route(app)
{
    app.all('/:controller', function(req, res, next){
        router.route(routingTable,req.params.controller, 'index', req, res, next);
    });

    app.all('/:controller/:action', function(req, res, next){
        router.route( routingTable,req.params.controller, req.params.action, req, res, next);
    });

    app.get('/:controller/:action/:id', function(req, res, next){
        router.route(routingTable,req.params.controller, req.params.action, req,res, next);
    });
}

//var siteController = require('./site.js');




exports.route = route;
