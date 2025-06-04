const express = require('express');
const router = express.Router();

/**
 * GET /api/users/:id
 * Route to get user info and total expenses
 */

const { getUserById } = require('../controllers/user_controller');

router.get('/users/:id', getUserById);

module.exports = router;
