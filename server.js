const express = require("express");

const app = express();
const router = require('./app/router')(app);

const PORT = process.env.PORT || 8080;

require('./app/database');

// app.use(router);

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
