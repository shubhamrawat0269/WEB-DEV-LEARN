const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const PORT = 8001;
const DB_URI = "mongodb://127.0.0.1:27017";
dotenv.config();

const currencyRoutes = require("./routes/currencies.routes.js");
const usersRoutes = require("./routes/users.routes.js");
const verifyAuth = require("./middlewares/verifyAuth.js");

mongoose
  .connect(`${DB_URI}`)
  .then(() => console.log(`Connected to DB at ${DB_URI}`))
  .catch((e) => console.log("Failed to connect to DB", e));

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Currency Database</h1>");
});

app.use(verifyAuth);

app.use("/currencies", currencyRoutes);

app.use("/users", usersRoutes);

app.listen(PORT, () => console.log(`Server Started at Port Number ${PORT}`));
