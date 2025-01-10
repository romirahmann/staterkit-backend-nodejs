var express = require("express");
var router = express.Router();
const path = require("path");

const masterRoutes = require("./master_routes/master.routes");
const auth_routes = require("./utility_routes/auth.routes");

const { accessControl, verifyToken } = require("../services/auth.service");

router.get("/not-found", function (req, res) {
  res.status(404).sendFile(path.join(__dirname, "../views/not-found.html"));
});

router.use("/auth/", auth_routes);
router.use("/master/", accessControl, masterRoutes);

module.exports = router;
