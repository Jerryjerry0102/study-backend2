const express = require("express"); 
const app = express();  
// 8.31
const multer = require("multer");
const path = require("path");
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


// app.get("/main2", (req, res) => {
//     res.render("main2",{});
// })

// app.get("/get/axios2", (req, res) => {
//     console.log(req.query);
//     var data = {
//         name: req.query.name,
//         gender: req.query.gender,
//         birth: req.query.birth,
//         interest: req.query.interest
//     }
//     res.send(req.query);
// })

// app.get("/prac3", (req, res) => {
//     res.render("prac3", {
//         id: "miso6495",
//         password: "mm6495"
//     });
// })


app.listen(port, ()=>{
    console.log("server open: ", port);
});