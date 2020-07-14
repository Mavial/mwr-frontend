var express = require('express');
var router = express.Router();

/* GET new event page */
router.get('/', function (req, res, next) {
    res.render('event-form', {
        title: 'New Event',
    });
});

module.exports = router;