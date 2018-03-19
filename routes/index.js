var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/renderInsertNews', function(req, res) {
  res.render('insertNews', { title: 'Express'});

  console.log("index.js triggered");

});

router.post('/insertNews', function(req, res){
  var title = req.body.insertTitle;
  var body = req.body.insertBody;
  var author = req.body.insertAuthor;
  var date = req.body.insertDate;
  var myObj = {title: title, story: body, date: date, author: author};
  console.log("Title: " + title + "  Body: " + body + "  Date: " + date + "  Author: " + author);

  var db = req.db;
  var collection = db.get('stories');
  collection.insert(myObj, function(e, docs) {
    if(e) return console.log(e);
    console.log("Created New story");
    res.redirect("/stories");
  });

});

// GET stories
router.get('/stories', function(req, res) {
    var db = req.db;
    var collection = db.get('stories');
    collection.find({},{},function(e,docs){
        res.render('stories', {
            "stories" : docs
        });
    });
});


router.post('/SignUp', function(req, res) {
  var up_email = req.body.up_email
  var up_username = req.body.up_username;
  var up_password = req.body.up_password;
  var confpassword = req.body.confpassword;
  //console.log("Email: " + up_email + "  Username: " + up_username + "  Password: " + up_password);
  var myObj = { email: up_email, username: up_username, password: up_password };
  var db = req.db;
  var collection = db.get('users');


  collection.insert(myObj, function(e, docs) {
    if (e) return console.log(e);
    console.log('saved to database');
    res.redirect("/");
    //alert("Now sign in with new acount");
    });



});

router.post('/SignIn', function(req, res) {
  var in_username = req.body.in_username;
  var in_password = req.body.in_password;
  console.log("Username: " + in_username + "  Password: " + in_password );
  var query = {username : in_username};

  var db = req.db;
  var collection = db.get('users');
  collection.find(query,{},function(e,docs){

    var exist = false;
    for(i=0; i < docs.length; i++){
      if (docs[i].password == in_password){
        exist = true;
      }
    }

    if (exist) {
      res.cookie("user", in_username);
      res.redirect("/stories");
    }

    else {
      res.redirect("/");
      console.log("DNE");
    }



  });
});



module.exports = router;
