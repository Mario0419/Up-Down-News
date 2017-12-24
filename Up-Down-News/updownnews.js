const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(express.static(__dirname + '/dist'));
app.use(cors({origin: '*'}));
// Add headers
app.listen(3004);