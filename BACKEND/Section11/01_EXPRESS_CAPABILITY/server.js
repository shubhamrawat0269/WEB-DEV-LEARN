import express from "express";
const port = 8082;

console.log(express);

const app = express();

app.listen(8082, () => {
  console.log(`Server Started With Port ${port}`);
});
