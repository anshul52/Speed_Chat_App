const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    message: { type: String, require: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    chat_id: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
