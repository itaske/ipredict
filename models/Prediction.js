const mongoose=require('mongoose');



let predictionSchema=new mongoose.Schema(
    {
        //id:{type:Number},
        competitionType:{type:String,default:"Premier League"},
        datePredicted:{type:Date, default:Date.now()},
        noOfPerfectScore:{type:Number,default:0},
        predictionType:{type:String,default:"Full Season"},
        seasonYear:{type:String,default:"2019/2020"},
        fixturesScoresPredicted:{type:Object},
        totalPredictionScore:{type:Number,default:0},
        week:{type:Number},
        user:{type:Object}
    }
)

module.exports=mongoose.model('Prediction',predictionSchema);