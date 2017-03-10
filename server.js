//Include dependencies and modules
const express = require('express');
const drivers = require('./routes/driversRouter');

//Instantiate your objects
const app = express();



//Config app settings
app.set('PORT', process.env.PORT || 8080);




//Connect to databases



//Define middleware




//Define routes and request handlers
app.get('/', function(req,res) {
  res.send('hello world');
});


app.get('/drivers', drivers.getDrivers);



//Start the app
app.listen(app.get('PORT'), function() {
  console.log(`your app is listening on PORT: ${app.get('PORT')}`);
});




//Optionally you can export the app as a module

