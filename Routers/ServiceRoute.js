const express = require('express')
const router = express.Router();



router.get('/service', PrinterPage);


module.exports = router