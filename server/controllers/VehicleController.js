const VehicleModel = require("../models/VehicleModel");

module.exports.list = (req, res) => {
  VehicleModel.find({}).exec().then(vehicles => {
    return res.json(vehicles);
  })
};