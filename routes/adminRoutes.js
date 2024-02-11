const express = require('express');
const router = express.Router()
const adminControl = require('../controls/adminControls')

router.get('/all-data',adminControl.allData);
router.delete('/delete-data',adminControl.deleteData);
router.post('/filter',adminControl.filterData);


module.exports = router;