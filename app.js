const express = require("express");
const app = express();

// Define request response in root URL (/)
app.get(
  "/test-admin-test-admin-test-admin-test-admin-test-admin-test-admin-test",
  function(req, res, next) {
    console.log("debuging");
    console.log("debuging");
    console.log("debuging");
    console.log("debuging");
    console.log("debuging");
    console.log("debuging");
    console.log("debuging");
    res.send("Hello World");
  }
);

// Launch listening server on port 3000
app.listen(3000, function() {
  console.log("App listening on port 3000!");
});
