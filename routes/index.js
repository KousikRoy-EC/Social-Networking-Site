const express = require('express')
const router = express.Router();
const HomeController = require("../controllers/Home");

router.get("/", HomeController.home);
router.use("/users", require("./user"));
router.use("/post", require("./post"));

module.exports = router;