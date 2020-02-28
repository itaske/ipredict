const mongoose=require('mongoose');



let generalSchema=new mongoose.Schema(
    {
       currentYear:{type:String},
       currentWeek:{type:Number}
    },
    {collections:'general'}
)

module.exports=mongoose.model('General',generalSchema,'general');