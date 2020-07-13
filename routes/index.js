var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // todo get db info of all props.
  res.render('index', { title: 'Put me' });
});

router.post('/add-property', function(req, res, next) {
  res.send(req.body);
})

module.exports = router;
