// get our data source
var friendsData = require("../data/friends");

module.exports = function(app) {

    //Shows a JSON of the friends data
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function(req, res) {
        
        //To be filled later
        var closestMatch = {
            name: "",
            photo: "",
            difference: 50
        }

        //Getting the data for the specific user
        var userName = req.body.name
        var userPhoto = req.body.photo
        var userScores = req.body.scores

        var totalDifference = 0;
        for(var i = 0; i < friendsData.length; i++) {

            for(var j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
            }

            if (totalDifference <= closestMatch.difference) {
                //filling our empty closestMatch if its the smallest difference
                closestMatch.name = friendsData[i].name;
                closestMatch.photo = friendsData[i].photo;
                closestMatch.difference = totalDifference;
            }
            
        }
        friendsData.push(req.body);
        console.log(closestMatch)
        res.json(closestMatch);
    })
}