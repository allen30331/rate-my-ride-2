Rate my Ride 2

This app allows users to find Uber and Lyft driver reviews. 


Technology

Node js
Mongodb
Mocha/Chai
jQuery


API

-----Drivers-----

//It will retrieve a driver by tag number
get /drivers/:tagNumber



//It will create a new driver
post /drivers


----Reviews-----
//It will create a review for a driver
post /reviews


//It will retrieve all reviews for a driver by tag number
get /reviews/:tagNumber

//It will retrieve all reviews for a user by their userId
get /reviews/:userId



Users


//It will create an account for a user
post /users

It will log in a user with username and password
post /login

It will log out a user
post /logout
