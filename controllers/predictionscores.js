let Prediction=require('../models/Prediction');


module.exports.savePrediction=(req,res,next)=>
{

    let prediction=new Prediction(
        {
        
            fixturesScoresPredicted:req.body,
        week:req.session.currentWeek,
        user:req.session.user
        }
    );
    prediction.save()
    .then(()=>{
        console.log(prediction.fixturesScoresPredicted);
        console.log("User "+prediction.user.name);
        console.log(prediction.week);
        let html="<html><body>Prediction Saved Succesfully <a href=\"/dashboard/fixtures?league="+req.body.league+"\">Go Back</body></html>";
        res.end(html);
    })
    .catch(err=>{
        console.log(err);

    })
 

}

module.exports.editPrediction=(req,res,next)=>
{
    console.log("Started Editing Predictions");
    console.log(req.body.league);
    console.log(req.session.currentWeek);
    console.log(req.session.currentYear);
    Prediction.findOne({competitionType:req.body.league,user:req.session.user,seasonYear:req.session.currentYear,week:req.session.currentWeek})
    .then((prediction)=>
    {
        console.log("Prediction "+prediction);

        prediction.fixturesScoresPredicted=req.body;
        let html="<html><body>Prediction Saved Succesfully <a href=\"/dashboard/fixtures?league="+req.body.league+"\">Go Back</body></html>";
        prediction.save()
        .then(()=>{
            console.log(prediction.fixturesScoresPredicted);
            res.end(html);
        })
        .catch(err=>{
            console.log(err);
    
        })

    })
    .catch(err=>console.log(err));
}