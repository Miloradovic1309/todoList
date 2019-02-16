var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require("body-parser");
    

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));



app.get('/', function(req, res){
   //res.send("HELLO FROM  THE ROOT ROUTE"); 
   res.sendFile("index2.html");
});


app.use('/api/todos', todoRoutes);

/*    
app.get('/', function(req, res){
    //res.send({message: "Hi from JS object!!!"});
   // res.json({message: "Hi from JS object!!!"});
    res.json("{data: 231554}");
});

app.get('/happy', function(req, res){
    res.send(":)");
});
*/

app.listen(port, function(){
    console.log("APP IS RUNNING " + port);
});