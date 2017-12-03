'use strict';


var mongoose = require('mongoose'),
Consumption = mongoose.model('Consumption');

exports.getConsumptions = function(req, res) {
  Consumption.find({}).exec()
  .then(function (consumptions) {
    var result = [];
    return Consumption.distinct('room_number').exec()
    .then(function(nbr) {
        return [consumptions, nbr];
    });
  })
  .then (function(result) {
    var nbr = result[1];
    var consumptions = result[0];

    res.send({'count': nbr.length, 'consumptions': consumptions});
  })
  .then(undefined, function(err){
      console.log(err);
      res.send(err);
  });
};

exports.getConsumptionNumber = function(req, res) {
  Consumption.distinct('room_number', function (err, roomNumber) {
    res.send(roomNumber);
  });
};


exports.create = function(req, res) {
  console.log(req.body);
  var new_c = new Consumption(req.body);
  new_c.date = new Date;
  console.log(new_c);
  new_c.save(function(err, c) {
    if (err)
    res.send(err);
    res.json(c);
  });
};

exports.getConsumption = function(req, res) {
    Consumption.find({'room_number' : req.params.roomNumber}, function(err, c) {
      if (err)
      res.send(err);
      res.json(c);
    });
};
