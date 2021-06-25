var myApp = require('express');
var app=myApp();
var mongooseApp = require('mongoose');
var models = require('./model/connect');
var bodyParser=require('body-parser');
var mybodyParser=bodyParser.json();
mongooseApp.connect('mongodb+srv://user:user123@cluster0.ze0q9.mongodb.net/mernstack?retryWrites=true&w=majority',
    {useNewUrlParser : true,
    useUnifiedTopology : true}
);

app.get('/rafikul',function(req,res){
    models.find().select('email').then((details)=>{
        res.status(200).json(details)
    })
})

app.delete('/abir/:id',function(req,res){
    models.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result)
    })
    .catch(err=>console.log(err))

})

app.listen(4799) 