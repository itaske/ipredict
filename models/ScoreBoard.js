const mongoose=require('mongoose');


let scoreBoardSchema=new mongoose.Schema(
    {
        //id:{type:Number},
        competitionType:{type:String,default:"Premier League"},
        seasonYear:{type:String},
        totalScore:{type:Number,default:0},
        totalPerfectScore:{type:Number,default:0},
        initialTotalScore:{type:Number,default:0},
        user:{type:Object}
    }
)

module.exports=mongoose.model('ScoreBoard',scoreBoardSchema);