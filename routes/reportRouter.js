const express = require('express');
const router = express.Router();
const { getMonthlyReport } = require('../controllers/report_controller');

router.get('/report', getMonthlyReport);

module.exports = router;
