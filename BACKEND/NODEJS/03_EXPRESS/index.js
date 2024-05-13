const express = require("express");
const dotenv = require("dotenv");

const app = express();
const PORT = 8001;
dotenv.config();

const currencyRoutes = require("./routes/currencies.routes.js");
const usersRoutes = require("./routes/users.routes.js");
const verifyAuth = require("./middlewares/verifyAuth.js");

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Currency Database</h1>");
});

app.use(verifyAuth);

app.use("/currencies", currencyRoutes);

app.use("/users", usersRoutes);

app.listen(PORT, () => console.log(`Server Started at Port Number ${PORT}`));
