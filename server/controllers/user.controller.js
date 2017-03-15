const User = require('../models/user.model');

module.exports = {

	list(req, res, next) {
		let find = {};

		if(req.query.email) {
			find.email = email;
		}

		if(req.query.username) {
			find.username = username;
		}

		console.log(find);

		User.find(find)
			.then((users) => {
				res.send(users);
			})
			.catch((e) => {
				next(e);
			})
	},

	add(req, res, next) {
		let user = new User(req.body);
		user.save()
			.then((response) => {
				res.send(response);
			})
			.catch((e) => {
				next(e);
			});
	},

	get(req, res, next) {
		User.find({ email: req.params.email })
			.then((user) => {
				res.send(user);
			})
			.catch((e) => {
				next(e);
			});
	},

	update(req, res, next) {
		// Figure out how we want to update info
	},

	remove(req, res, next) {
		User.remove({ email: req.params.email })
			.then((user) => {
				res.send(user);
			})
			.catch((e) => {
				next(e);
			});
	}



};
