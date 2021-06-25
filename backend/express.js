const express=require('express');
var myApp=express();
var router=express.Router();
var chkUrl=require('./models');

// myApp.use(chkUrl);

myApp.get('/',function(req, res){
    res.send("Welcome to Our Home Page")
});
myApp.get('/signup',chkUrl,function(req, res){
    res.sendFile(__dirname+"/signup.html")
    // res.send("Welcome to sign up page")
});

myApp.get('/signin',function(req, res){
    res.sendFile(__dirname+"/signin.html")
    // res.send("Welcome to sign in page")
});
myApp.use('/',router);
myApp.listen(3000)