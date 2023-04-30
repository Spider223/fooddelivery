const express = require("express");
const app = express();
const menu = require("./routes/menu");
const user = require("./routes/user");
const cors = require("cors");
const dbConnect = require("./dbConnect/dbConnect");

const port = 8000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(cors());
app.use(express.json());

app.use("/", menu);
app.use("/api/v1/user", user);

dbConnect;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
