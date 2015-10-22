var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log('response?');
});

router.get('/me', function(req, res, next) {
    res.send('I am a user. Hear me complain.');
})
module.exports = router;
