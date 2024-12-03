const express = require("express");
const authRouter = require("./auth.route");
const router = express.Router();

// router.use("/", (req, res) => {
//   res.send({ res: "hello sir !!" });
// });
router.use("/api", authRouter);
module.exports = router;
