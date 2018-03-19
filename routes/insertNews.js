var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
//
// router.get('/insertNews', function(req, res, next) {
//   //res.render('insertNews', { title: 'Express' });
//   res.send("Insert News");
// });

router.post('/insertNews', function(req, res) {
  // res.render('insertNews', { title: 'Express'});
  // var title = req.body.insertTitle;
  // var body = req.body.insertBody;
  // var author = req.body.insertAuthor;
  // var date = req.body.insertDate;
  // var myObj = {title: title, story: body, date: date, author: author};
  // console.log("Title: " + title + "  Body: " + body + "  Date: " + date + "  Author: " + author);
  //
  //
  // var db = req.db;
  // var collection = db.get('stories');
  // collection.insert(myObj, function(e, docs) {
  //   if(e) return console.log(e);
  //   console.log("Created New story");
  //   //res.redirect("/insertNews");
  // });
  console.log("insertNews.js triggered");
});


module.exports = router;
