const MongoClient = require('mongodb').MongoClient;
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'test';


var insertData=function(col,callback){


    var data=[{"name":"baidu"},{"name":"speedup"}];

    col.insert(data,function(err,result){
            if(err){ 
                console.log('Error:',err);    
                return;
            }
            callback(result);
    });

};


var selectData=function(col,callback)
{
   //connection
   //
   var wherestr={"name":"baidu"};
   col.find(wherestr).toArray(function(err,result){

            if(err)
            {
                console.error(err);
                return;
            }

            callback(result);
   })

};


var updateData=function(col,callback)
{
    var wherestr={"name":"speedup"};
    var updatestr={$set:{"url":"http://www.speedup.org"}};
    col.update(wherestr,updatestr,function(err,result){

        if(err) 
        {
            console.log("Error"+err);
            return;
        }

        callback(result);
    })
};

var deleteData=function(col,callback)
{
    var  wherestr={"name":"baidu"};
    col.remove(wherestr,function(err,result){
        if(err) 
        {
            console.log("Error"+err);
            return;
        }
        callback(result);
    });

};

MongoClient.connect(url,function(err,client){
    
    const col=client.db(dbName).collection('site');
    
    insertData(col,function(result){
        console.log("----------------------------------------");
        console.log(result);
        client.close();
    });

    selectData(col,function(result){
        console.log("----------------------------------------");
        
          console.log(result);
          client.close();  
    });

    updateData(col,function(result){
        console.log("----------------------------------------");
        
        console.log(result);
        client.close();
    })

    deleteData(col,function(result){
        console.log("----------------------------------------");
        
      console.log(result);
      client.close();
    })
});