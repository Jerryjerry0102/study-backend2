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


app.get("/photo", (req, res) => {
    res.render("photo")
})
app.post("/upload", upload.fields([{name: 'userfile'}, {name: 'profile'}]), (req, res) => {
    // single(): 하나의 파일 업로드 요청
    // array(): 하나의 요청 안에 여러 개의 파일이 존재할 때
    // fields(): 하나의 요청이 아닌 여러 개의 요청이 들어올 때
    console.log( req.files );
    // single()일 경우: req.file
    // array(), fields()일 경우: req.files
    console.log( req.body );
    res.send("upload");
})

app.get("/prac4_2", (req, res) => {
    res.render("prac4_2", {});
})
app.post("/prac4_2_upload", upload.single("photo"), (req, res) => {
    console.log( req.file );
    console.log( req.body );
    res.render("prac4_2_upload", {
        photo: req.file.filename
    })
})

app.get("/photo_axios", (req, res) => {
    res.render("photo_axios", {});
})
app.post("/photo_axios_upload", upload.single("userfile"), (req, res) => {
    console.log( req.file );
    console.log( req.body );
    res.send( "업로드 성공" );
})


app.listen(port, ()=>{
    console.log("server open: ", port);
});