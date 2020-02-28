const mongoose=require('mongoose');

const fixtureSchema=new mongoose.Schema(
{
    //id:{type:Number,required:true},
    away:{type:String,required:true},
    home:{type:String,required:true},
    league:{type:String,default:'Premier League'},
    played:{type:Boolean,default:false},
    week:{type:Number},
    score:{type:String},
    seasonYear:{type:String},
    dateToBePlayed:{type:Date, default:Date.now()}

}

);

module.exports.Fixture=mongoose.model('Fixture',fixtureSchema);


