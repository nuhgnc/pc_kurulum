const express = require('express')
const router = express.Router();

const {API_ADD_Printer,PrinterPage,API_REMOVE_Printer} = require('../Controllers/PrinterControllers')


router.get('/printer', PrinterPage);

router.get('/api/addPrinter/:id', API_ADD_Printer);
router.get('/api/removePrinter/:id', API_REMOVE_Printer );

module.exports = router