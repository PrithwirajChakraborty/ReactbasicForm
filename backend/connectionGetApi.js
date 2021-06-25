var myApp = require('express');
var app=myApp();
var mongooseApp = require('mongoose');
var models = require('./model/connect');
var newbodyParser=require('body-parser');
var mybodyParser=newbodyParser.json();
mongooseApp.connect('mongodb+srv://user:user123@cluster0.ze0q9.mongodb.net/mernstack?retryWrites=true&w=majority',
    {useNewUrlParser : true,
    useUnifiedTopology : true}
);

app.get('/prc',function(req,res){
    myModel.find().select('email').then((details)=>{
        res.status(200).json(details)
    })
})

app.listen(4798)