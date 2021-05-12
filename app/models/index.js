const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

// models
db.users = require("./user.model.js")(mongoose);
db.news = require("./news.model.js")(mongoose);

module.exports = db;
