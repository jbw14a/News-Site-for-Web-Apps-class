var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/stories', function(req, res, next) {
  res.render('stories', { title: 'Express' });
});

// GET stories //
router.get('/stories', function(req, res) {
    var db = req.db;
    var collection = db.get('stories');
    collection.find({},{},function(e,docs){
        res.render('stories', {
            "stories" : docs
        });
    });
});


module.exports = router;
