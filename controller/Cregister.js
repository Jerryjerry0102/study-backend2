const register = require("../model/register");

exports.register = (req, res) => {
    register.get_register(function(result){
        res.render("register", {data:result});
    })
}

exports.post_register = (req, res) => {
    register.post_register(req.body, function(result){
        var data = {
            id: result, 
            name: req.body.name,
            comment: req.body.comment
        }
        res.send(data);
    })
}