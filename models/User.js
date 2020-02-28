const mongoose=require('mongoose');

let userSchema= mongoose.Schema(
    {
        name:{type:String},
        dateRegistered:{type:Date, default:Date.now()},
        userName:{type:String,default:"IPredicter"},
        userRole:{type:String,default:"user"},
        countryLocated:{type:String,default:"Nigeria"},
        email:{type:String},
        id:{type:Number},
        password:{type:String},
        phoneNumber:{type:String}
    }
);

let User=mongoose.model('User',userSchema,'users');

module.exports=User;