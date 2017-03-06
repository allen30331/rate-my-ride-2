// We have three ways to specify DATABASE_URL: 
// through an environment variable, within the application using a global variable, 
// or else we default to a local database value. 

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/rate-my-ride-2';
exports.PORT = process.env.PORT || 8080;