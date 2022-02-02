const express = require('express')
const router = express.Router();
const PostController = require("../controllers/Post");

router.get("/timeline", PostController.post);

module.exports = router;