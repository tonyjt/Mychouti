/**
 * Created with JetBrains WebStorm.
 * User: tony
 * Date: 13-8-20
 * Time: 下午11:07
 * To change this template use File | Settings | File Templates.
 */
function route(app)
{
    app.get('/', function(req, res){
        res.send('Hello11 World');
    });
}

exports.route = route;
