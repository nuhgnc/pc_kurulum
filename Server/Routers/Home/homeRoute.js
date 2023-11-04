const express = require('express')
const router = express.Router();

const HomeController = require('../../Controllers/Home')



router.get('/', HomeController.Home);



module.exports = router