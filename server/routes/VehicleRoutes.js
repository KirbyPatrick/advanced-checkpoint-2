const express = require("express");
const router = express.Router();
const {list, show, create, update, remove} = require("../controllers/VehicleController");
router.get("/vehicles", list)

module.exports = router;