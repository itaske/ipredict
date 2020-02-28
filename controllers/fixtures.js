let Fixture=require('../models/Fixture').Fixture;

let Prediction=require('../models/Prediction');


module.exports.getFixures=(req,res,next)=>
{
    console.log("Week "+req.session.currentWeek);
    console.log("SeasonYear "+req.session.currentYear);
    console.log('League '+req.query.league);
    Fixture.find({league:req.query.league,week:req.session.currentWeek})
    .then(fixtures=>{
           console.log(fixtures);
           Prediction.findOne({competitionType:req.query.league,user:req.session.user,seasonYear:req.session.currentYear,week:req.session.currentWeek})
           .then((predictions)=>
           {
               console.log(predictions);
            if(predictions)
               {
                   console.log("Prediction Present");
                res.render('dashboard/fixtures',{fixtures:fixtures,week:req.session.currentWeek,competitionType:req.query.league,image:'../images/',fixturesScoresPredicted:predictions.fixturesScoresPredicted,edit:true, action:'/editScores',status:""});
               } 
            else
            {
                console.log("No prediction");
                res.render('dashboard/fixtures',{fixtures:fixtures,week:req.session.currentWeek,competitionType:req.query.league,image:'../images/',fixturesScoresPredicted:{},edit:false,action:'/scores',status:""});
            }
                
           })
           .catch(er=>console.log(er))
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports.postFixtures=(req,res,next)=>
{
    let fixture=new Fixture(
        {
            away:req.body.away,
            home:req.body.home,
            week:req.body.week,
            score:req.body.score,
            seasonYear:'2019/2020',
        }
    );
    
    fixture.save()
   .then(()=>{
       console.log(req.body.home);
       
       res.json({status:"Fixure Saved Succesfully"});
   })
   .catch(err=>{
       console.log(err);
   })
}