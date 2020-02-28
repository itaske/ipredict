var express = require('express');
var router = express.Router();
let User =require('../controllers/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json("users served")
});


/*Save user. */
router.post('/',User.saveUser);

module.exports = router;
