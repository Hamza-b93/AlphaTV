const express = require('express');
const UserController = require("../controllers/UserController.js");
const router = express.Router();

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.post('/:id', UserController.postUser);
module.exports = router;
