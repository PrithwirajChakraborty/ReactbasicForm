var myApp = require('express');
var app = myApp();
var mongooseApp = require('mongoose');
var models = require('./model/connect');
var bodyParser = require('body-parser');
var mybodyParser = bodyParser.json();
mongooseApp.connect('mongodb+srv://user:user123@cluster0.ze0q9.mongodb.net/mernstack?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//we are using body parser as we are persuing data from body
app.put("/put/:id", mybodyParser, function (req, res) {
    model.updateOne(
        { _id: req.params.id },
        {
            $set: {
                name: req.body.Myname,
                email: req.body.Myemail,
                mobile: req.body.Mymobile,
                password: req.body.Mypassword,
            }
        }
    ).then((result) => {
        res.status(200).json(result)
    }).catch(err => { console.log(err) })
})

app.listen(4799)