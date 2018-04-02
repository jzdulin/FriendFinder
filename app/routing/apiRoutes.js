// get our data source
var friendsData = require("../data/friends");

module.exports = function(app) {

    //Shows a JSON of the friends data
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function(req, res) {
        friendData.push(req.body)
    })
}