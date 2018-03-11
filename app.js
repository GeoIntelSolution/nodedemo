var express =require("express");
var app=express();
var fs=require("fs");
app.use(express.static('public'));

app.get("/",function(req,res){
    
    res.sendFile(__dirname+"/public/"+"app.html");

});


var server= app.listen(3000,function(){


});