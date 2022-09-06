const all = require("../model/all");

exports.all = (req, res) => {
    all.all(function(result){
        res.render("all", {data:result})
    })
}

exports.post_all = (req, res) => {
    all.post_all(req.body, function(result){
        var data = {
            id: result,
            name: req.body.name,
            comment: req.body.comment
        }
        res.send(data);
    })
}

exports.delete_all = (req, res) => {
    all.delete_all(req.body.id, function(){
        
        res.send("삭제 완료");
    })
}

exports.load_all = (req, res) => {
    all.load_all(req.body.id, function(result){
        
        res.send(result[0]);
    })
}

exports.correct_all = (req, res) => {
    all.correct_all(req.body, function(){
        res.send(req.body);
    })
}