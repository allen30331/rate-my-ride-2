exports.getUserReviews = function(req,res,next) {
	res.send('this is a users reviews');
}

exports.createUser = function(req,res,next) {
	res.send('you created a user');
}

exports.logout = function(req,res,next) {
	res.send('you logged out');
}

exports.login = function(req,res,next) {
	res.send('you logged in');
}