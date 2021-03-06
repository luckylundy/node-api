var express = require("express");
var router = express.Router();
var userController = require("../controllers/user");

/* GET users listing. */
router.get("/", userController.showAllUsers);
router.get("/:userId", userController.showUserById);
router.get("/json", userController.sendJson);

module.exports = router;
