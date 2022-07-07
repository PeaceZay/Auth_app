let express = require("express");
let router = express.Router();
let controller = require("../controllers/todosCtrlers");

let auth = require("../middleware/auth")


router.get("/todos", auth.verifyJWT, controller.listItems);

module.exports = router;