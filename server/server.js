var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {
        res.send(doc);
        console.log(JSON.stringify(doc, undefined, 2));
    }, (e) => {
        res.status(400).send(e);
        console.log('Unable to save todo ', e);
    })
})

app.listen(3000, () => {
    console.log('Started on port 3000');
})