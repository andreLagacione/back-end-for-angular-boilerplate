const router = require('express').Router();

router.use('/login', require('./login'));
router.use('/companies', require('./companies'));
router.use('/menus', require('./menus'));
router.use('/permissions', require('./permissions'));

module.exports = router;