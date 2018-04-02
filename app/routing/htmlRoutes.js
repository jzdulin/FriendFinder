//npm package that we need
var path = require("path");

module.exports = function(app) {

    //sends the user to the survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/surver.html"));
    });

    //Default to home if no matching route is found
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
}