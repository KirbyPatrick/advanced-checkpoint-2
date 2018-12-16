import express from "express";
import mongoose from "mongoose";
const app = express();
const bodyParser = require("body-parser");
const vehicleRoutes = require("./routes/VehicleRoutes");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://dbuser:DBuserpass12@ds019638.mlab.com:19638/checkpoint2");

app.use(express.static("public"));


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.use(bodyParser.json());
app.use(vehicleRoutes);