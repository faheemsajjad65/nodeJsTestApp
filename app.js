//Load express module with `require` directive
// eslint-disable-next-line no-undef
var express = require("express");
var app = express();

//Define request response in root URL (/)
app.get("/", function(req, res) {
res.send("Hello World");
});

//Launch listening server on port 3000
app.listen(3000, function() {
console.log("App listening on port 3000!");
});
