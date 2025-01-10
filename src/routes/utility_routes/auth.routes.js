var express = require("express");
var router = express.Router();

router.post("/login", () => {
  console.log("Routes Login Berhasil");
});

module.exports = router;
