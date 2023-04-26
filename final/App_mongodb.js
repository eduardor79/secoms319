var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "assignment3";
const client = new MongoClient(url);
const db = client.db(dbName);
const port = "8081";
const host = "localhost";



app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
    });