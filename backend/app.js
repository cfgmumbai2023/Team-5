const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


// Route Import

const user = require('./routes/userRoutes');
const creator = require('./routes/creatorRoute');
const errormiddleware = require('./middleware/error')

app.use("/", user);
app.use("/", creator);
app.use(errormiddleware);

module.exports = app;