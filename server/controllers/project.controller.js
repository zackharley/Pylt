const Project = require('../models/project.model');

module.exports = {

	list(req, res, next) {
		Project.find({})
			.populate('users')
			// .populate('assets')
			.exec()
			.then((projects) => {
				res.send(projects);
			})
			.catch((e) => {
				next(e);
			})
	},

	add(req, res, next) {
		let project = new Project(req.body);
		project.save()
			.then((response) => {
				res.send(response);
			})
			.catch((e) => {
				next(e);
			});
	}

}
