const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
