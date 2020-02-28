let router=require('express').Router();

router.get('/',function(req,res,next)
{
    req.session.user={};
    console.log("logout "+req.session.user);
    res.redirect('login');
})

module.exports=router;