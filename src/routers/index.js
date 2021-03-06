const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact page'});
});

module.exports = router;