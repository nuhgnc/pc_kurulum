const express = require('express')
const router = express.Router();

const HomeController = require('../../Controllers/Home')



router.get('/', HomeController.Home);
router.get('/merkez', (req,res)=> {
    console.log(req.url)
})



module.exports = router