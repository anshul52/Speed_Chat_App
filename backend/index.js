const express = require("express");
const apiLogger = require("morgan");
const socketIo = require("socket.io");
const router = require("./routes/index");
const connectDB = require("./utils/db");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

connectDB();
app.use(apiLogger("dev"));
app.use(router);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
