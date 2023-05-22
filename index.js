const express = require("express");
require("express-async-errors");
const app = express();
const port = 3000;
const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
