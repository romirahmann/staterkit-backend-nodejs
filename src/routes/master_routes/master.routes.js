var express = require("express");
var router = express.Router();

router.post("/endpoint", () => {
  console.log("Routes Login Berhasil");
});

module.exports = router;
