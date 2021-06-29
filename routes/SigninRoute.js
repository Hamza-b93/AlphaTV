const express = require('express');
const UserController = require("../controllers/UserController.js");
const router = express.Router();

router.post('/', UserController.userSignin);
module.exports = router;
