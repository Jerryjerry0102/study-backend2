const visitor = require("../model/visitor");

exports.visitor = (req, res) => {
    visitor.get_visitor(function(result){
        // rows를 result로 받는다.
        console.log("visitors2:", result);
        // model/visitor.js의 console과 같은 것이 찍힐 것
        res.render("visitor", {data: result});
        // visitor.ejs에서 result값을 받아서 data로 쓰겠다.
    })
}

exports.post_visitor = (req, res) => {
    visitor.post_visitor(req.body, function(result){
        var data = {
            id: result,
            name: req.body.name,
            //data1에서 받아온 걸 req.body로 쓰는 중
            comment: req.body.comment
        }
        res.send(data);
        // 그래서 이걸 data에 받아서 res.send 하면 then(response)로 가서 쓰임
    })
}