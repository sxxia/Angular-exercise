"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send("hello express");
});
app.get('/products', function (req, res) {
    res.send("recieve the requset for product searching");
});
var server = app.listen(8000, 'localhost', function () {
    console.log("server start, address is: http://localhost: 8000");
});
