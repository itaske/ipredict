const mongoose=require('mongoose');

let servicesSchema=new mongoose.Schema(
    {
        id:{type:Number},
        league:{type:String,default:'Premier League'},
        price:{type:Number,default:0},
        seasonYear:{type:String},
        type:{type:String} //Full Season, Weekly
    }
)

module.exports.Service=mongoose.model('Service',servicesSchema);