const http=require("http");
var express=require("express");
const fs =require("fs");

const hostname="127.0.0.1";


const port =3000;

const server =http.createServer((req,res)=>{
	var htmldata="";
	fs.readFile("./app.html",function(error,data){
		
		if(error)
		{
			console.log(error);
			res.writeHead(404, {'Content-Type': 'text/html'});
		}
		else{

			res.writeHead(200, {'Content-Type': 'text/html;text/css'});    
         
			// 响应文件内容
			res.write(data.toString());        
		}
		res.end();
	});
}).listen(3000);


console.log('Server running at http://127.0.0.1:3030/');