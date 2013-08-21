/**
 * Created with JetBrains WebStorm.
 * User: tony
 * Date: 13-8-20
 * Time: 下午11:07
 * To change this template use File | Settings | File Templates.
 */
var mu   = require("./node_modules/mu2/lib/mu");

mu.root = __dirname + "/views";

function route(app)
{
    app.get('/', function(req, res){
        var stream = mu.compileAndRender('shared/index.html', {name: "john"});

        //response.pipe(stream);
        stream.pipe(res);

        stream.on('end', function() {
            res.end();
        });
    });

    app.post("/",function(req,res){
        res.send("hello post");
    });
}

exports.route = route;
