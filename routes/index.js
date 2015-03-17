var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* PUT response. */
router.put('/put', function(req, res, next) {
    res.send('PUT has been requested');
});

/* POST response. */
router.post('/post', function(req, res, next) {
    res.send('POST has been requested');
});

/* DELETE response. */
router.delete('/delete', function(req, res, next) {
    res.send('DELETE has been requested');
});

module.exports = router;