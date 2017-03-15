const router = require('express').Router();
const userCtrl = require('./../../controllers/user.controller');

router.get('/', userCtrl.list);
router.post('/', userCtrl.add);
router.get('/:email', userCtrl.get);
// router.put('/:email', userCtrl.update);
router.delete('/:email', userCtrl.remove);

module.exports = router;
