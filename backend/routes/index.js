const express = require("express");

const router = express.Router();

router.use("/", (req, res) => {
  res.send({ res: "hello sir !!" });
});
module.exports = router;
