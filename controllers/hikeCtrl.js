var mongojs = require('mongojs');
var ObjectId = require('mongodb').ObjectId;

var db = mongojs('hikes', ['hikes']);

module.exports {
  read: function(req, res) {
    db.hikes.find({}, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  create: function(req, res) {
    db.hikes.insert(req.body, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function(req, res) {
    var newObj = {
      query: {_id: ObjectId(req.params.id)},
      update: {$set: req.body},
      new: false
    };
    db.hikes.findAndModify(newObj, function(err, result) {
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  delete: function(req, res) {
    db.hikes.remove({_id:ObjectId(req.params.id)},function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }

});
