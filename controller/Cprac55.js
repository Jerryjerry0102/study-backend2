const prac55 = require("../model/prac55");

exports.prac55 = (req,res) => {
    res.render("prac55");
}
exports.prac55_axios = (req, res) => {
    var info = prac55.info();
    console.log(info.users);
    var myInfo = info.users.split("\n");
    var result = false;
    var name = "";
    for( var i = 0; i<myInfo.length; i++){
        var user = myInfo[i].split("//");

        if(req.body.id == user[0] && req.body.password == user[1]){
            result = true;
            name = user[2];
            break;
        }
    }

    if(result) res.send(name + "님 환영합니다.");
    else res.send("아이디 또는 비밀번호를 잘못 입력했습니다.");

    // console.log(myInfo);
    // console.log(myInfo[0].split("//"));
    
    // var a = myInfo[0].split("//");
    // var b = myInfo[1].split("//");
    // var c = myInfo[2].split("//");

    // if(req.body.id == a[0] && req.body.password == a[1]){
    //     res.send(a[2] + "님 환영합니다.");
    // }
    // else if(req.body.id == b[0] && req.body.password == b[1]){
    //     res.send(b[2] + "님 환영합니다.");
    // }
    // else if(req.body.id == c[0] && req.body.password == c[1]){
    //     res.send(c[2] + "님 환영합니다.");
    // }
    // else{
    //     res.send("아이디 또는 비밀번호를 잘못 입력했습니다.");
    // }
}