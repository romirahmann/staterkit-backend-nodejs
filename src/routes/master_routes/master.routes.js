var express = require("express");
var router = express.Router();

router.get("/testing", () => {
  console.log("Routes Login Berhasil");
});

module.exports = router;
