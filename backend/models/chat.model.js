const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    isGroup: { type: Boolean, default: false },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
