const express = require('express');
const myApp = express();
const mongoose = require('mongoose');
const models = require('./model/connect');
mongoose.connect('mongodb+srv://user:user123@cluster0.ze0q9.mongodb.net/mernstack?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    // .then(() => {
    //     console.log("mongodb connected")
    // });
    models.find({}, function (err, users) {
    if (err) console.log(err);
    console.log(users);
})
    // .catch(err => console.log(err))
