let router=require('express').Router();
let user=require('../controllers/users');


router.get('/',function(req,res,next)
{
    res.render('login',{title:"IPredict"})
});

router.post('/',user.getUser);

module.exports=router;
