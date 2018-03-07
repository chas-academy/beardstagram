var express = require('express');
var app = express();
var db = require('./db.js');

var UserController = require('./UserController');
app.use('/users', UserController);

module.exports = app;