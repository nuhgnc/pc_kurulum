const express = require('express')
const router = express.Router();

const HomeController = require('../../Controllers/Home')



router.get('/merkez', HomeController.Home);

router.get('/magaza', HomeController.Home);

router.get('/merkez', (req,res)=> {
    console.log(req.url)
})



module.exports = router