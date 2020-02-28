const router=require('express').Router();

router.get('/',function(req,res,next)
{
    res.render('signup',{title:"IPredict"});

});

module.exports=router;