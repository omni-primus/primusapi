//Router Handler
const express = require('express');
const router = express.Router();

//Request URL -> Fake Extern Data for testing
//var requestURL = 'http://stelar7.no/valorant/eu/1609149216.json';

//define request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//get Valorant rank
//function getValoRank(){
    //var request = new XMLHttpRequest();

    //request.onreadystatechange = function(){
        //if (this.readyState == 4 && this.status == 200){
            //var daten = JSON.parse(this.responseText);
            //id = daten.id;
        //}
    //};
    //request.open("GET", requestURL, true);
    //request.send();
//}

module.exports = router