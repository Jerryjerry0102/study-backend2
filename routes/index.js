// 9.2
var express = require("express");
const router = express.Router();

var controller = require("../controller/Cmain");
router.get("/hi", controller.hi);
router.get("/bye", controller.bye);


// 9.2 실습
router.get("/prac5", controller.prac5);
router.post("/prac5_login", controller.login);

// 혼자 복습
var controller5 = require("../controller/Cprac55");
router.get("/prac55", controller5.prac55);
router.post("/prac55_axios", controller5.prac55_axios);


// mysql
var controllerV = require("../controller/Cvisitor");
router.get("/visitor", controllerV.visitor);
router.post("/visitor/post", controllerV.post_visitor);
router.post("/visitor/delete", controllerV.delete_visitor);
router.post("/visitor/get", controllerV.get_visitor);
router.post("/visitor/update", controllerV.update_visitor);

// mysql register복습
var controllerG = require("../controller/Cguest");
router.get("/guest", controllerG.guest);
router.post("/guest/post", controllerG.post_guest);

var controllerR = require("../controller/Cregister");
router.get("/register", controllerR.register);
router.post("/register/post", controllerR.post_register);

module.exports = router;