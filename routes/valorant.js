//Router Handler
const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

//Request URL -> Fake Extern Data for testing
var requestURL = new URL('http://stelar7.no/valorant/eu/1609149216.json');

//Name of Player you want to know the rank
const PlayerName = 'Merkker';
var timecode = '';

//get json from URL
async function getData(){
    var response = await fetch(requestURL);
    var data = await response.json();
    while(!data);
    return data;
}

//get the rank
async function getRank(){
    var data = await getData();
    var rank = 'Rank of this Player could not be found';
    var playerpuuid;
    //Getting puuid from Player
    for (var i = 0; i < data.players.length; i++){
        if (data.players[i].gameName == PlayerName){
            playerpuuid =  data.players[i].puuid;
        }
    }
    //getting rank from player via puuid
    for (var i = 0; i < data.matches.length; i++){
        for (var j = 0; j < data.matches[i].players.length; j++){
            if (data.matches[i].players[j].puuid == playerpuuid){
                rank = data.matches[i].players[j].competitiveTier;
                //get date of the match the rank is from
                var timestamp = data.matches[i].matchInfo.gameStartMillis;
                var date = new Date(timestamp);
                var hours = date.getHours();
                var minutes = "0" + date.getMinutes();
                var seconds = "0" + date.getSeconds();
                var jahr = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                timecode = month + '/' + day + '/' + jahr + ' | ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            }
        }
    }
    return rank;
}

//Handle get request
router.get('/', async (req, res, next) => {
    const message = await getRank();
    res.status(200).json({
        Player: PlayerName,
        Rank: message,
        Date: timecode
    })
});

module.exports = router