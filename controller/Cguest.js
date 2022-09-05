const guest = require("../model/guest");

exports.guest = (req, res) => {
    guest.get_guest(function(result){
    // model이랑 연결부분
        console.log("guest3 : ", result);
        res.render("guest", { data: result });
        // views랑 연결 부분
    })
}

exports.post_guest = (req, res) => {
    guest.post_guest(req.body, function(result){
        var data = {
            id: result,
            name: req.body.name,
            comment: req.body.comment
        }
        res.send(data);
    })
}

exports.delete_guest = (req, res) => {
    guest.delete_guest(req.body.id, function(){
        res.send("삭제 완료");
    })
}
