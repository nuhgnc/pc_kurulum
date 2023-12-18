const express = require('express')
const router = express.Router();
const {ServiceController} = require('../Controllers/ServiceConroller')



router.get('/services', ServiceController);


module.exports = router