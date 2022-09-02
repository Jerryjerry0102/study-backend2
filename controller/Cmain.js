const Test = require("../model/Test");

exports.hi = (req, res) => {
    var hi = Test.hello();
    res.send(hi);
}

exports.bye = (req, res) => {
    var bye = Test.chues();
    res.send(bye);
}



// 9.2 실습
exports.prac5 = (req,res) => {
    res.render("login")
}
exports.login = (req,res) => {
    var info = Test.info();
    console.log(req.body);
    if(req.body.id == info.id && req.body.password == info.password){
        res.send("로그인 성공");
    }
    else{
        res.send("로그인 실패");
    }
}