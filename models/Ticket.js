const mongoose=require("mongoose");
let Service=require('./Service');
let User=require('./User');
let ticketSchema=new mongoose.Schema(
    {
        id:{type:Number},
        dataSubscribed:{type:Date,default:Date.now()},
        paid:{type:Boolean,default:false},
        pricePaid:{type:Number},
        serviceId:{type:Service},
        user:{type:User},
        weekSubscribedFor:{type:Number}
    }
)

module.exports.Ticket=mongoose.model('Ticket',ticketSchema);