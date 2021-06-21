const express = require('express');
const StreamController = require("../controllers/StreamController.js");
const router = express.Router();

//router.get('/', UserController.getUsers);
router.get('/:id', StreamController.getStream);
//router.post('/:id', UserController.postUser);
module.exports = router;
