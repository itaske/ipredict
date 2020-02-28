var express = require('express');
var router = express.Router();
let User=require('../controllers/users');

/* GET home page. */
router.get('/', User.checkForUserInfo,function(req, res, next) {
    //console.log(req.session.user);
  res.render('dashboard/predict', { title: 'IPredict'});
});

module.exports = router;
