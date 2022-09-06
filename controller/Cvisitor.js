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
            // 여기서 result는 model에서 cb(result.insertId);로 받아온 result.
            name: req.body.name,
            //data1에서 받아온 걸 req.body로 쓰는 중
            comment: req.body.comment
        }
        res.send(data);
        // 그래서 이걸 data에 받아서 res.send 하면 then(response)로 가서 쓰임
    })
}

exports.delete_visitor = (req, res) => {
    visitor.delete_visitor(req.body.id, function(){
        res.send("삭제 완료");
        // 보낼 데이터가 없어도 응답은 해야한다.
    })
}

exports.get_visitor = (req, res) => {
    visitor.get_visitor_by_id(req.body.id, function(result){
        
        // if(result.length > 0)
        res.send(result[0]);
        // else res.send("뭔가 잘못됐어요")
        // 하나만 받아와도 결국 배열로 불러와지기 때문에 인덱스를 입력해야 함.
    })
}
exports.update_visitor = (req, res) => {
    visitor.update_visitor(req.body, function(){
        res.send(req.body);
    })
}