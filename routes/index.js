var express = require('express');
var router = express.Router();
const scraper = require('../utils/scraper');
const { prependListener } = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  // todo get db info of all props.
  res.render('index', { title: 'Put me' });
});

router.post('/', function(req, res, next) {
  let url = req.body.propUrlInput;

  // Call to ./utils/scraper to scrape the link provided:
  const propertyData = new Promise((resolve, reject) => {
    scraper
      .scrapeProp24(url)
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('Prop24 scrape failed'))
  });


  // In future there might be more than one website that we collect data (promises) from
  Promise.all([propertyData])
    .then(splitData => { 
      console.log("splitData: ", splitData[0][0])
      res.render('add', { title: 'Finding prop',  price: splitData[0][0].price, room: splitData[0][0].room, place: splitData[0][0].place })
    })
    .catch(err => res.status(500).send(err));

})

module.exports = router;
