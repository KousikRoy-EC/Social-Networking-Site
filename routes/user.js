const express = require('express')
const router = express.Router();
const UserController = require("../controllers/User");

router.get("/profile", UserController.user)
router.get("/sign-up", UserController.signup)
router.get("/sign-in", UserController.login)
router.post("/createSession", UserController.createSession)
router.post("/create", UserController.create)
module.exports = router;