//Include dependencies and modules
const express = require('express');
const drivers = require('./routes/driversRouter');
const reviews = require('./routes/reviewsRouter');
const user = require('./routes/userRoutes');

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

app.get('/drivers/:tagNumber', drivers.getDriver);

app.get('/drivers/:tagNumber/reviews', drivers.getDriverReviews);

app.post('/drivers', drivers.createDriver);

app.post('/reviews', reviews.createReviews);

app.get('/users/:userId/reviews', user.getUserReviews);

app.post('/users', user.createUser);

app.post('/users/logout', user.logout);

app.post('/users/login', user.login);



//Start the app
app.listen(app.get('PORT'), function() {
  console.log(`your app is listening on PORT: ${app.get('PORT')}`);
});




//Optionally you can export the app as a module

