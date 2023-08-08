// module.exports.home = function(req , res){
//     return res.render('home');
// }
module.exports.home = function(req, res){
    console.log(req.cookies);
    res.cookie('user_id',44);

    return res.render('home', {
        title: "Home page "
    });
}


// module.exports.actionName = function(req, res){}