const express = require('express')
const router = express.Router();

const HomeController = require('../../Controllers/Home')



router.get('/merkez', HomeController.Home);

router.get('/magaza', HomeController.Home);

router.get('/', HomeController.MainHome)



module.exports = router