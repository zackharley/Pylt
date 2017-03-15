const router = require('express').Router();
const organizationCtrl = require('./../../controllers/organization.controller');

router.get('/', organizationCtrl.list);
router.post('/', organizationCtrl.add);
router.get('/:name', organizationCtrl.get);
// router.put('/:name', organizationCtrl.update);
router.delete('/:name', organizationCtrl.remove);

module.exports = router;
