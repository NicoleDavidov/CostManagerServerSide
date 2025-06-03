const express = require('express');
const router = express.Router();

const { addCostItem } = require('../controllers/cost_controller');

router.post('/add', addCostItem); // POST request to add a cost item

module.exports = router;


