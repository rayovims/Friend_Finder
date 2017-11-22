var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function (req, res) {
    res.json(users);
});

var users = [
    {
        "name": "Ahmed",
        "photo": "https://c1.staticflickr.com/8/7175/6698567177_fc5df89f18_b.jpg",
        "scores": [
            5,
            1,
            4,
            3,
            1,
            4,
            5,
            1,
            4,
            2
        ]
    },
    {
        "name": "Raymundo O",
        "photo": "http://assets.schwarzenegger.com/images/img-2.jpg",
        "scores": [
            5,
            5,
            1,
            3,
            4,
            3,
            3,
            5,
            2,
            5
        ]
    },
    {
        "name": "Scot",
        "photo": "https://pm1.narvii.com/5866/76b201e12343e860570c62f4067307e04ed545fe_hq.jpg",
        "scores": [
            3,
            2,
            1,
            4,
            5,
            4,
            3,
            1,
            1,
            3
        ]
    }, 
    {
        "name": "John Smith",
        "photo": "http://vignette3.wikia.nocookie.net/althistory/images/7/74/Recent-portraits-random-people-in-random-places_11.jpg/revision/latest?cb=20141209232111",
        "scores": [
            1,
            4,
            2,
            4,
            2,
            4,
            3,
            1,
            3,
            1
        ]
    },
    {
        "name": "Miguel Smith",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg",
        "scores": [
            3,
            2,
            1,
            1,
            5,
            1,
            2,
            5,
            3,
            4
        ]
    },
    {
        "name": "Protein Shake",
        "photo": "http://trainertonymartinez.com/wp-content/uploads/2012/10/Protein-Shake.jpg",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            5,
            1,
            1,
            1,
            1
        ]
    },
    {
        "name": "Gio Seth",
        "photo": "https://www.randomlists.com/img/people/serena_williams.jpg",
        "scores": [
            5,
            1,
            1,
            2,
            1,
            5,
            2,
            3,
            2,
            1
        ]
    },
    {
        "name": "Johny Seth",
        "photo": "https://pbs.twimg.com/profile_images/681369932207013888/CHESpTzF.jpg",
        "scores": [
            3,
            2,
            1,
            4,
            5,
            5,
            2,
            5,
            5,
            1
        ]
    },
    {
        "name": "Jani S",
        "photo": "https://www.randomlists.com/img/people/serena_williams.jpg",
        "scores": [
            4,
            2,
            4,
            5,
            5,
            2,
            3,
            4,
            3,
            4
        ]
    },
    {
        "name": "Becky G",
        "photo": "http://s2.r29static.com//bin/entry/bd5/x,80/1650488/image.jpg",
        "scores": [
            3,
            3,
            1,
            3,
            3,
            5,
            1,
            1,
            4,
            5
        ]
    },
];

app.post("/survey", function (req, res) {
    var newUser = req.body;
    repeatEach(newUser);
    users.push(newUser);
    res.json(users[bestMatch]);
});
var scoreDiff = [];
var bestMatch;
function repeatEach(newUser) {
    scoreDiff = [];
    for (j = 0; j < users.length; j++) {
        compare(users[j], newUser)
    }
}

function compare(oldUser, newUser) {
    var total = 0;
    var z = [];
    var x = oldUser.scores;
    var y = newUser.scores;
    for (var i = 0; i < 10; i++) {
        z.push(Math.abs(x[i] - y[i]));
        total += z[i];
    }
    scoreDiff.push(total);
    bestMatch = scoreDiff.indexOf(Math.min.apply(null, scoreDiff));
}

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
