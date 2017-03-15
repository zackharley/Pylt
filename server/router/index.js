const router = require('express').Router();
const organization = require('./routes/organization.route');
const project = require('./routes/project.route');
const user = require('./routes/user.route');

router.use('/organization', organization); // USE: /api/organization
router.use('/project', project);
router.use('/user', user); // USE: /api/user

module.exports = router;
