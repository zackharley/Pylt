const router = require('express').Router();
const projectCtrl = require('../../controllers/project.controller');

router.get('/', projectCtrl.list);
router.post('/', projectCtrl.add);

module.exports = router;
