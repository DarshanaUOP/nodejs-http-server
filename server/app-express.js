var express = require('express');

var app = express();

app.get('/',function(request,response){
    response.send("hi");
});

app.get('/me/:name', function(req,res){
    res.send("Your name is : " + req.params.name);
}); 

app.listen(3000);