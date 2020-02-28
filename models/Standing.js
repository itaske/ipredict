const mongoose =require('mongoose');
const User=require('./User')

let standingSchema=new mongoose.Schema(
    {
        currentSeasonScore:{type:Number},
        currentSeason:{type:String},
        league:{type:String},
        user:{type:User}
    }
)
module.exports.Standing=mongoose.model('Standing',standingSchema);