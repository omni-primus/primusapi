//Router Handler
const express = require('express');
const router = express.Router();

//Request URL -> Fake Extern Data for testing
var requestURL = 'http://stelar7.no/valorant/eu/1609149216.json';
var text;

//define request
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//get Valorant rank
async function getValoRank(){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            text = data.players[0];
            console.log("bin da");
        }
    };
    request.open("GET", requestURL, true);
    request.send();
}

router.get('/', (req, res, next) => {
    getValoRank();
    res.status(200).json({
        message: text
    });
});

module.exports = router