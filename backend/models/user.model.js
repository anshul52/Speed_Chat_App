const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, require: true, default: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
