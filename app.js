const express = require('express');
const config = require('config');
const sqlite3 = require('sqlite3').verbose();

const app = express();

const PORT = config.get("port") || 6384;

app.listen(PORT, () => console.log("App started on port " + PORT));