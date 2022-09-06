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

exports.delete_register = (req, res) => {
    register.delete_register(req.body.id, function(){
        res.send("삭제 완료");
    })
}

exports.correct_register = (req, res) => {
    register.correct_register(req.body.id, function(result){
        res.send(result[0]);
    })
}

exports.update_register = (req, res) => {
    register.update_register(req.body, function(){
        res.send(req.body);
    })
}