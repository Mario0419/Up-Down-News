const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
app.use(express.static(__dirname + '/dist'));
app.listen(3004);