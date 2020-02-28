const mongoose=require('mongoose');

let connect=()=>
{
    mongoose.connect('mongodb+srv://Patrick:aDBS2h2u181F8Huh@openclassroom-pgwm0.mongodb.net/ipredictworld?retryWrites=true&w=majority', {useNewUrlParser: true})
.then((result)=>{
    console.log("Connection set");
})
.catch(err=>{
    console.log("Connection error");
});
};


module.exports.connect=connect;