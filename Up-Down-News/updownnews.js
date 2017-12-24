const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const https = require('https');
const request = require('request');

const app = express();
app.use(cors());
app.use(express.static(__dirname + '/dist'));

app.get('/retrieve/newyorktimes/:category', function(req, res) {
    request('http://rss.nytimes.com/services/xml/rss/nyt/' + req.params.category + ".xml", function(error, response, body) {
        res.send(body);
    })
});

app.get('news/goodNews/:category', function(req, res) {

});
// Add headers
app.listen(3004);