
let express = require("express");

let router = new express.Router();

let controller = require("../controllers/userCtrlers")

router.post("/register", controller.register);

router.post("/login", controller.login);

module.exports = router;