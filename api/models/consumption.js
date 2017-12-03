'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ConsumptionSchema = new Schema({
  room_number: {
    type: Number,
    required: 'Kindly enter the room number'
  },
  date: {
    type: Date,
    default: Date.now
  },
  consumption: {
    type: Number,
    required: 'Kindly enter the consumption number'

  }
});

module.exports = mongoose.model('Consumption', ConsumptionSchema);
