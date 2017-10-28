// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Restaurant reservations (DATA)
// =============================================================
var reservations = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Get all reservations
app.get("/all", function(req, res) {
  res.json(reservations);
});

// Search for Specific Reservation (or all reservations) - provides JSON
app.get("/api/:reservations?", function(req, res) {
//  var chosen = req.params.reservations;

//  if (chosen) {
//    console.log(chosen);

    for (var i = 0; i < 5; i++) {
      console.log(reservations[i]);
        return res.json(reservations[i]);
    }
    return res.json(false);

  return res.json(reservations);
});

// Create New reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;

  console.log(newReservation);

  // We then add the json the user sent to the reservation array
  reservations.push(newReservation);

  // We then display the JSON to the users
  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
