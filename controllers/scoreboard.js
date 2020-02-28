let Scoreboard=require('../models/ScoreBoard');
let User=require('../models/User');

module.exports.getScoreboard=(req,res,next)=>
{
    Scoreboard.find().sort({"totalScore":-1,"initialTotalScore":-1})
    .then((result)=>
    {
        console.log(result);
        res.render('dashboard/scoreboard',{scoreboard:result,counter:1});
    })
    .catch(err=>{
        console.log(err);
    })
};

module.exports.createScoreboardForCurrentUsers=(req,res,next)=>
{
    User.find()
    .then((result)=>
    {
        console.log("Total result "+result.length);
        result.forEach(user=>
            {
                let scoreboard=new Scoreboard({
                    seasonYear:"2019/2020",    //change it to a variable
                    user:user
                });
            
                scoreboard.save()
                .then(()=>
                {
                     console.log("Scoreboard for User: "+user.name+" has been created");
                })
                .catch(er=>
                    {
                        console.log(er);
            
                    });
                    
            })

    })
    .catch(err=>
        {
            console.log(err);
        })
  
}

