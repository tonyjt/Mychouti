/**
 * Created with JetBrains WebStorm.
 * User: 江涛
 * Date: 13-8-21
 * Time: 下午5:36
 * To change this template use File | Settings | File Templates.
 */

function route(routingTable,controller, action, req, res, next){
    if (routingTable[controller] && routingTable[controller] == 1){
        var routeController = require("./controllers/"+ controller);
        if(routeController != null)
        {
            if(routeController[action])
            {

            }

        }
        if (module[controller][action]){
            var index = 0;
            var handles = module[controller][action];
            var next_handle = function(err){
                if (err){
                    next(err);
                }
                else{
                    var handle = handles[index++];
                    if(!handle){
                        next(err);
                    }
                    else{
                        handle(req,res, next_handle);
                    }
                }
            };

            next_handle();
        }
        else{
            next();
        }
    }
    else{
        next();
    }
}
exports.route = route;