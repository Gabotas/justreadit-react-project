const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const articles = [
        { id: 1, title: 'First article', content: 'This is the first article'},
        { id: 2, title: 'Second article', content: 'This is the second article'}
    ];

    res.json(articles);
});

module.exports = router;