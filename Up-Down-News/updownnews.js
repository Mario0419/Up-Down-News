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

app.listen(3004);