const expressApp = require('express');
const myApp = expressApp();
const mongoose=require('mongoose');
var models = require('./model/connect');
mongoose.connect('mongodb+srv://user:user123@cluster0.ze0q9.mongodb.net/mernstack?retryWrites=true&w=majority',
    {useNewUrlParser : true,
    useUnifiedTopology : true}
);

models.find({},function(err,users){
    if(err) console.log(err);
    console.log(users);
})
.catch(err=>console.log(err))