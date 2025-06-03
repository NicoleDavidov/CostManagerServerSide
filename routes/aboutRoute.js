const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.json([
        { first_name: 'Nicole', last_name: 'Davidov' },
        { first_name: 'Polina', last_name: 'Shchulepova' }
    ]);
});

module.exports = router;
