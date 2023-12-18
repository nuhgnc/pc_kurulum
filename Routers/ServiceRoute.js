const express = require('express')
const router = express.Router();
const {ServiceController,ServiceRestart,ServiceStart,ServiceStop} = require('../Controllers/ServiceConroller')



router.get('/services', ServiceController);
router.get('/service/restart/:service_name', ServiceRestart);
router.get('/service/start/:service_name',ServiceStart );
router.get('/service/stop/:service_name', ServiceStop);


module.exports = router