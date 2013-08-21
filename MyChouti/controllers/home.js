/**
 * Created with JetBrains WebStorm.
 * User: 江涛
 * Date: 13-8-21
 * Time: 下午6:15
 * To change this template use File | Settings | File Templates.
 */
function index(req,res,next)
{
    res.send("home.index test");
}

exports = {
    index: index
};