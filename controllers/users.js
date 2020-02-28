
let User=require('../models/User');
let General=require('../models/General');
let Scoreboard=require('../models/ScoreBoard');

module.exports.getUser=(req,res,next)=>
{
   User.findOne({email:req.body.email})
       .then(result=>{
           //console.log(result);
           if(result)
           {
               console.log("Entered here");
               console.log("Entered password "+result.password);
               console.log('Result password '+req.body.password);
               if(result.password===req.body.password)
               {

                 General.find().then(general=>
                    
                    {
                        
                        console.log("General "+ general);
                          req.session.currentYear=general[0].currentYear;
                        req.session.currentWeek=general[0].currentWeek;
                        req.session.user=result;
                        console.log(req.session.user);
                        console.log(req.session.currentYear);
                        console.log(req.session.currentWeek);
                        if(!req.session.currentPage)
                       {
                         res.redirect('/dashboard/account');
                       } 
                       else
                       {
                           res.redirect(req.session.currentPage);
                       }
                    })
                    .catch(e=>console.log(e))
               }
               else
               {
                   res.redirect('login');
               }
           }
       })
       .catch(err=>console.log(err))

};

module.exports.saveUser=(req,res,next)=>
{
    console.log("inside here");
     let user=new User(
         {
             name:req.body.name,
             userName:req.body.username,
             email:req.body.email,
             id:req.body.id,
             password:req.body.password,
             phoneNumber:req.body.phoneNumber

         }
         

    ) ;

   
   user.save()
   .then(()=>{
       console.log(req.body.name);
       console.log("User"+user);
       let scoreboard=new Scoreboard({
        seasonYear:"2019/2020",    //change it to a variable
        user:user
    });

    scoreboard.save()
    .then(()=>
    {

    })
    .catch(er=>
        {
            console.log(er);

        })
       res.json({status:"Saved Succesfully"});
   })
   .catch(err=>{
       console.log(err);
   })

};

module.exports.getUsers=(req,res,next)=>
{

};


module.exports.checkForUserInfo=(req,res,next)=>
{
    if(!req.session.user)
    {
        
            console.log("Hello inside checkforuserinfo");
            console.log(req.url);
            req.session.currentPage=req.url;
            console.log("Current Page "+req.session.currentPage);
          res.render('login');
       
    }
    else{
        if(!req.session.user.userName)
        {
            console.log("Hello inside checkforuserinfo");
            console.log(req.originalUrl);
            req.session.currentPage=req.originalUrl;
            console.log("Current Page "+req.session.currentPage);
          res.render('login');
        }
        else{
           
            next();
        }
    }
  
};