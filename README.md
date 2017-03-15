Rate my Ride 2

This app allows users to find Uber and Lyft driver reviews. 


Technology

Node js
Mongodb
Mocha/Chai
jQuery


API

-----Drivers-----
//It will retrieve all drivers, will only be used in development, not in production
get /drivers


//It will retrieve a driver by tag number
get /drivers/:tagNumber

//It will retrieve all reviews for a driver by tag number
get /drivers/:tagNumber/reviews


//It will create a new driver
post /drivers


----Reviews-----



//It will create a review for a driver
post /reviews






Users

//It will retrieve all reviews for a user by their userId
get /users/:userId/reviews


//It will create an account for a user
post /users

It will log in a user with username and password
post /users/login

It will log out a user
post /users/logout



-------Author-------
get /authors

post /authors

put /authors/:id

delete /authors/:id



//List all the books an author has written
get /authors/:id/books

//Add a book to an author's list of books
post /authors/:id/books




-------Books-------

get /books

post /books

put /books/:id

delete /books/:id

//List all of a books authors
get /books/:id/authors

//Add cover image to a paticular book
post /books/:id/coverImage

put /books/:id/whatever we want to update

delete /books/:id/whatever we want to delete