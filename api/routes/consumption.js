'use strict';
module.exports = function(app) {
  var consumptionController = require('../controllers/consumption');

  // todoList Routes
  app.route('/consumptions')
  .get(consumptionController.getConsumptions)
  .post(consumptionController.create);

  app.route('/consumption/:roomNumber')
  .get(consumptionController.getConsumption)
};
