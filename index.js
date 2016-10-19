//packages
var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require ('cors');

//variables
var app = express ();

//middlewear
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

//end points
app.get('/hikes', hikeCtrl.read);
app.post('/hikes', hikeCtrl.create);
app.put('/hikes/:id', hikeCtrl.update);
app.delete('/hikes/:id', hikeCtrl.delete);

//listen
app.listen(8000, function(){
  console.log("aliens are watching on 8000");
});
