var express = require('express');
var app = express();

app.use(express.static('node_modules'));
app.use(express.static('public'));
app.get('/', function(request, response){
    console.log('server is running');
});

app.listen(8000);
console.log('server running');