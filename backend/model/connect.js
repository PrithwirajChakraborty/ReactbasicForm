const mongoose=require('mongoose');
const mySchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    mobile:String,
    password:String
})
module.exports=mongoose.model('users',mySchema);