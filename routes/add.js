const express = require('express');
const router = express.Router();

// Show to add link to new property. Scraping and adding of etra info to be implemented.
router.get('/', function(req, res, next) {
    // res.render("add");
    res.send("Can't access this page directly. Please return to home page: localhost:3000");
});

router.post('/add', function(req, res, next) {
    res.send("Posted from /add");
});

module.exports = router;