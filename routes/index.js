// 9.2
var express = require("express");
const router = express.Router();

var controller = require("../controller/Cmain");
router.get("/hi", controller.hi);
router.get("/bye", controller.bye);


// 9.2 실습
router.get("/prac5", controller.prac5)
router.post("/prac5_login", controller.login);



// mysql
var controllerV = require("../controller/Cvisitor");
router.get("/visitor", controllerV.visitor);
router.post("/visitor/post", controllerV.post_visitor);


module.exports = router;