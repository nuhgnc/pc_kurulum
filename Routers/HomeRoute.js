const express = require('express')
const router = express.Router();

const HomeController = require('../Controllers/HomeControllers')




router.get('/', HomeController.MainHome)
router.get('/genel', HomeController.Home);



module.exports = router