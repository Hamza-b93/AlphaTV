const express = require('express');
const UserController = require("../controllers/UserSignupController.js");
const router = express.Router();

router.post('/:id', UserController.postUser);
module.exports = router;
