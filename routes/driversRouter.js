

exports.getDrivers = function(req,res,next) {
  res.send('these are all the drivers');
}

exports.getDriver = function(req,res,next) {
 res.send('this is a driver');
}


exports.getDriverReviews = function(req,res,next) {
	res.send('these are driver reviews');
}

exports.createDriver = function(req,res,next) {
	res.send('you created a driver');
}