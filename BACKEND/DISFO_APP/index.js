const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017";
const app = express();
const PORT = 8082;
dotenv.config();

// imported routes & verifyAuth
const userRoutes = require("./routes/users.routes");
const discussionRoutes = require("./routes/discussion.routes");

app.use(express.json());

mongoose
  .connect(`${MONGO_URI}`)
  .then(() => console.log(`Connected to DB at ${MONGO_URI}`))
  .catch((e) => console.log(`Failed to connect to DB`, e));

// chanelling routes
app.use("/user", userRoutes);
app.use("/discussion", discussionRoutes);

app.listen(PORT, () => {
  console.log(`Server start at PORT:${PORT}`);
});
