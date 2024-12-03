const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, require: true, default: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.Schema("User", userSchema);
