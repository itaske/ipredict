const mongoose=require('mongoose');

let clubSchema=new mongoose.Schema(
    {
        id:{type:Number},
        league:{type:String,default:"Premier League"},
        name:{type:String},
        clubCode:{type:String}
    }
)
module.exports.Club=mongoose.model('Club',clubSchema);