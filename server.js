const express = require("express");
const bodyParser = require("body-parser");
const colorsRouter = require("./routes/ColorsRouter");
const historyRouter = require("./routes/HistoryRouter");
const sequelize = require("./database");

const port = 5001;

const app = express();
app.use(bodyParser.json());
app.use("/colors", colorsRouter);
app.use("/history", historyRouter);

sequelize.sync().then(() => console.log("db is ready"));

app.listen(port, () => {
  console.log("app started on port:" + port);
});
