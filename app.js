const express = require("express");
const app = express();

const bunyan = require('bunyan');
const log = bunyan.createLogger({name: "myapp"});
log.info("hi");

// Define request response in root URL (/)
app.get(
  "/",
  function(req, res, next) {
    res.send("Hello World");
  }
);

// Launch listening server on port 3000
app.listen(3000, function() {
  console.log("App listening on port 3000!");
});
