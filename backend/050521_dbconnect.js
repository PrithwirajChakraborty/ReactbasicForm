const expressApp = require('express');
// var dataApp = expressApp();
const mongooseApp=require('mongoose');
const models = require('./model/connect');
mongooseApp.connect('mongodb+srv://user:user123@cluster0.ze0q9.mongodb.net/mernstack?retryWrites=true&w=majority',
    {useNewUrlParser : true,
    useUnifiedTopology : true}
);

const data=new models({
    _id:new mongooseApp.Types.ObjectId(),
    name:"Satrajit",
    email:'satrajit@gmail.com'
});
data.save().then((result)=>{
    console.log(result)
})
.catch(err=>console.log(err))


