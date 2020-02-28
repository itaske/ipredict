var express = require('express');
var router = express.Router();
let User=require('../controllers/users');

/* GET home page. */
router.get('/',User.checkForUserInfo,function(req, res, next) {

      console.log("Inside here")
      displayName=req.session.user.userName;
      res.render('dashboard/account', { title: 'IPredict',userName:displayName});

   
});

module.exports = router;
