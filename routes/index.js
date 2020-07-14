var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // todo get db info of all props.
  res.render('index', { title: 'Put me' });
});

router.post('/', function(req, res, next) {
  let url = req.body.propUrlInput;

  let data = {
    title: propTitle,
    agent: propAgent
  }
  
  res.render('/add', data);
})

module.exports = router;
