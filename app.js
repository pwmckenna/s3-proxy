'use strict';

var express = require('express');
var app = express();
var request = require('request');

app.get('*', function (req, res) {
    request(req.protocol + '://s3.amazonaws.com/' + process.env.S3_BUCKET + req.url).pipe(res);
});

module.exports = app;