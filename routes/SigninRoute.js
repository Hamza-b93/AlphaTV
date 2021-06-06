const express = require('express');
const UserController = require("../controllers/UserController.js");
const router = express.Router();

router.post('/:id', UserController.postUser);
module.exports = router;
