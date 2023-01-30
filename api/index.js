const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ extended: false }));
app.use(bodyParser.json());

app.get("/api/generate", (req, res) => {
  res.json({ success: true });
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});

module.exports = app;
