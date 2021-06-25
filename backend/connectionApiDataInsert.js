
var myApp = require('express');
var app=myApp();
app.use(myApp.json());
// var mongooseApp = require('mongoose');
var mysql=require('mysql');
const { db } = require('./TestCol');
var models = require('./model/connect');
// var bodyParser=require('body-parser');
// var mybodyParser=bodyParser.json();

let database=mysql.createConnection({
    host:"localhost",
    user:"",
    password:"",
    database:""
});

database.connect(function(error){
    if(error) throw error;
    console.log("conn")
})


// mongooseApp.connect('mongodb+srv://user:user123@cluster0.ze0q9.mongodb.net/mernstack?retryWrites=true&w=majority',
//     {useNewUrlParser : true,
//     useUnifiedTopology : true}
// );


app.post('/abir',function(req,res){

    let {email,mobile,name01,password} = req.body;

    const data=new models({
        _id:new mongooseApp.Types.ObjectId(),
        email,mobile,name01,password
    });
    data.save().then((result)=>{
        res.status(201).json(result)
    })
    .catch(err=>console.log(err))

})

app.listen(4550) 