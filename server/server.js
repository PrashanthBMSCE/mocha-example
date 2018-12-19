const express = require('express');

var app = express();



app.get('/', function (req, res) {
    res.send('hello worlddfgsdg');
})

app.get('/users', (req, res) => {
    res.send([{
        name: 'Mike',
        age: 27
    }, {
        name: 'Andrew',
        age: 25
    }])
})

if (!module.parent) {
    app.listen();
}
module.exports.app = app;