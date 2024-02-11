const router = require('express').Router();
const utileControl =require('../controls/utileControls')

router.post('/blood-data',utileControl.addData);
router.get('/get-state-data',utileControl.stateData)

module.exports = router;