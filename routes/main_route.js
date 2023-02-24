const express = require('express');
const router = express.Router();
const postapi = require('../controller/api');
router.post('/',postapi)

module.exports = router;