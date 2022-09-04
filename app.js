const express = require("express"); 
const app = express();  
// 8.31
const multer = require("multer");
const path = require("path");
const { resourceLimits } = require("worker_threads");
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done( null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext);
            // done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5*1024*1024 }, // 5MB 파일용량제한
})
//   
const port = 8000;

app.set("view engine", "ejs");      

app.use("/static", express.static("static"));
app.use('/static', express.static('public'));
app.use("/uploads", express.static("uploads"));

// 8.30 수업
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//

app.get("/prac1_2", (req, res) => {
    res.render("prac1_2", {});
})
app.post("/prac1_2_post", (req, res) => {
    console.log(req.body)
    res.render("prac1_2_post", {
        name: req.body.name,
        gender: req.body.gender,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day,
        interest: req.body.interest
    });
})

app.get("/prac1_2_axios", (req, res) => {
    console.log(req.query);
    res.send(req.query);
})


app.get("/login_basic", (req, res) => {
    res.render("login_basic");
})
app.post("/login_basic_axios", (req, res) => {
    if(req.body.id == "miso6495" && req.body.pw == "mm6495"){
        res.send("로그인 성공");
    }
    else{
        res.send("아이디 또는 비밀번호를 잘못 입력했습니다.");
    }
})


app.listen(port, ()=>{
    console.log("server open: ", port);
});