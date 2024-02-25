const Router = require('express');
const router = new Router();
const controller = require('../Controllers/mainController');

router.get('/dashbord', controller.dashbord);
// router.get('/', controller.index);


module.exports = router;