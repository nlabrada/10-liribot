require("dotenv").config();

// importing required stuff
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var request = require ("request");
var moment = require("moment");
var fs = require("fs");

// function for CONCERT-THIS

function concertThis () {
    var key = keys.bandsintown.key;
    request ("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=" + key, function(err, result, body){
        if (err){
            console.log(err);
        } else if (!err && response.statusCode === 200) {
            var info = JSON.parse(body)[0];
            var infoArray = [
                "Venue: " + info.venue.name,
                "Location: " + info.venue.city + info.venue.region ,
                "Date: " + moment(info.datetime).format("MM/DD/YYYY")
            ].join("\n\n")
        }
    })
};