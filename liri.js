require("dotenv").config();

// importing required stuff \\
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var request = require ("request");
var moment = require("moment");
var fs = require("fs");

// commands! \\
var whatToRun = process.argv[2];
var whatToSearch = process.argv.slice(3).join('');

// function for CONCERT-THIS \\
function concertThis() {
    var key = keys.bandsintown.key;
    if (!whatToRun){
        whatToRun = "turnover";
    } else{
        request ("https://rest.bandsintown.com/artists/" + whatToSearch + "/events?app_id=" + key, function(err, result, body){
            if (err){
                console.log(err);
            } else if (!err && response.statusCode === 200) {
                var info = JSON.parse(body)[0];
                var bandsintownArray = [
                    "Venue: " + info.venue.name,
                    "Location: " + info.venue.city + info.venue.region ,
                    "Date: " + moment(info.datetime).format("MM/DD/YYYY")
                ].join("\n\n");
            };
        console.log(bandsintownArray);
        });
    };
};

// function for SPOTIFY-THIS-SONG \\
function spotifyThisSong() {
    var spotify = new Spotify(keys.spotify);
    if(!whatToSearch){
        whatToSearch = "Wake Up Jacob";
    }
    spotify.search({
        type: "track",
        query: whatToSearch
    }, function(err, data){
        if (err) {
            console.log(err);
        } else {
            var songData = data.tracks.items[0];
            var songArray = [
                "Artist(s): " + songData.artists[0].name,
                "Song: " + songData.name,
                "Sneak Peek 😉: " + songData.preview_url,
                "Album: " + songData.album.name
            ].join("\n\n");
        };
        console.log(songArray);
    });
};

// function for MOVIE-THIS \\
function movieThis() {
    var key = keys.omdb.apikey;
    if (!whatToRun){
        whatToRun = "Open Your Eyes";
    }
    request("http://www.omdbapi.com/?t=" + whatToSearch + "&y=&plot=short&apikey=" + key, function(err, response, body){
        if (err){
            console.log(err);
        } else if (!err && statusCode === 200) {
            var movieData = JSON.parse(body);
            var movieArray = [
                
            ]
        }
    })
}