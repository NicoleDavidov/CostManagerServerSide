const express = require('express');
const router = express.Router();

/**
 * @route GET /api/about
 * @description Returns a list of the developers' first and last names
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object[]} JSON array of developer objects
 */

router.get('/about', (req, res) => {
    res.json([
        { first_name: 'Nicole', last_name: 'Davidov' },
        { first_name: 'Polina', last_name: 'Shchulepova' }
    ]);
});

module.exports = router;
