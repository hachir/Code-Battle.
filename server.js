const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./db");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");

const userRoute = require("./routes/userRoute");
const questionRoute = require("./routes/questionRoute");

const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(
    bodyParser.urlencoded({
      extended: false
    })
);
app.use(bodyParser.json());

// Sessions
app.use(
    session({
      secret: "rando string", //pick a random string to make the hash that is generated secure
      store: new MongoStore({mongooseConnection: dbConnection}),
      resave: false, //required
      saveUninitialized: false //required
    })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}