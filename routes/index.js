var express = require('express');
var router = express.Router();

var bookshelf = require('../config/bookshelf');
var User = require('../model/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/adduser', (req,res,next) =>{
  console.log(req.params);
  User.forge({'name' : req.query.name}).save().then((rows) =>{
    res.json(rows);
    return;
  });
})

module.exports = router;
