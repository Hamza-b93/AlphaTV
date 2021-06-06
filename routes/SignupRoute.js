const express = require('express');
const UserController = require("../controllers/UserController.js");
const router = express.Router();

router.post('/', UserController.postUser);
module.exports = router;
