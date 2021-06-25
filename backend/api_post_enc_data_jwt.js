var myApp = require('express');
var app=myApp();
var mongooseApp = require('mongoose');
var models = require('./model/connect');
var bodyParser=require('body-parser');
var mybodyParser=bodyParser.json();
var mycrypto=require('crypto');
var key="Priyajit@#NNUG0258569";
var algo='aes256';
var jwt=require('jsonwebtoken');
var jwtkey='jwtkey';

mongooseApp.connect('mongodb+srv://user:user123@cluster0.ze0q9.mongodb.net/mernstack?retryWrites=true&w=majority',
    {useNewUrlParser : true,
    useUnifiedTopology : true}
).then(()=>{
    console.log("System Connected")
}); 

app.post('/postenc',mybodyParser,function(req,res){
    var myCipher= mycrypto.createCipher(algo,key);


    // encrypt the password Advanced Encryption Standard 256 using UTF8 & hex 
    var encryptedPassword=myCipher.update(req.body.password,'utf8','hex')
    +myCipher.final('hex');

    const newdata=new models({
        _id: mongooseApp.Types.ObjectId(),
        name:req.body.Myname,
        email:req.body.Myemail,
        password:encryptedPassword,
    });
    newdata.save().then((result)=>{
        // applying jwt key to create a token for 180s
        jwt.sign({result},jwtkey,{expiresIn:'180s'},(err,token)=>{

        // to show the token in postman
            res.status(201).json({token})
        })
    })
    .catch(err=>console.log(err))
})
app.listen(4799)