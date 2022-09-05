const neu = require("../model/neu");

exports.neu = (req, res) => {
    neu.get_neu(function(result){
        res.render("neu", {data:result})
    })
}

exports.post_neu = (req, res) => {
    neu.post_neu(req.body, function(result){
        var data = {
            id: result,
            name: req.body.name,
            comment: req.body.comment
        }
        res.send(data);
    })
}

exports.delete_neu = (req, res) => {
    neu.delete_neu(req.body.id, function(){
        res.send("삭제 완료");
    })
}