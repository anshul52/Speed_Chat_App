const express = require("express");
const apiLogger = require("morgan");
const socketIo = require("socket.io");
const router = require("./routes/index.js");
const connectDB = require("./utils/db");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiLogger("dev"));
app.use(router);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
