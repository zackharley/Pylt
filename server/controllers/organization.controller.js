const Organization = require('../models/organization.model');

module.exports = {

	list(req, res, next) {
		Organization.find({})
			.populate('admins')
			.exec()
			.then((organizations) => {
				res.send(organizations);
			})
			.catch((e) => {
				next(e);
			})
	},

	add(req, res, next) {
		let organization = new Organization(req.body);
		organization.save()
			.then((response) => {
				res.send(response);
			})
			.catch((e) => {
				next(e);
			});
	},

	get(req, res, next) {
		Organization.find({ name: req.params.name })
			.populate('admins')
			.exec()
			.then((organization) => {
				res.send(organization);
			})
			.catch((e) => {
				next(e);
			});
	},

	update(req, res, next) {
		// Figure out how we want to update info
	},

	remove(req, res, next) {
		Organization.remove({ name: req.params.name })
			.then((response) => {
				res.send(response);
			})
			.catch((e) => {
				next(e);
			});
	}

}
