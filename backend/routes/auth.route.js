const express = require("express");

const { createUser, signIn } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/sign-up", createUser);
router.post("/sign-in", signIn);

module.exports = router;
