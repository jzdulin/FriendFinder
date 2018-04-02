//The npm packages we need
var express = require("express");
var bodyParser = require("body-parser");

//creating the Express server
var app = express();
//selecting the port
var PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//points the server to the route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//shows that the server is running and gives a link to it
app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
});
  