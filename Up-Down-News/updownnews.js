const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const https = require('https');
const request = require('request');

const app = express();
app.use(cors());
app.use(express.static(__dirname + '/dist'));


// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.get('/retrieve/newyorktimes/:category', function (req, res) {
    request('http://rss.nytimes.com/services/xml/rss/nyt/' + req.params.category + ".xml", function (error, response, body) {
        res.send(body);
    })
});

app.get('/retrieve/goodNews/:category/feed/', function (req, res) {
    var url = "https://www.goodnewsnetwork.org/category/" + req.params.category + "/feed/";
    console.log(url);
    request(url, function (error, response, body) {
        res.send(body);
    })
});

app.listen(3004);