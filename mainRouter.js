const Router = require('express');
const router = new Router();
const controller = require('./mainController');

router.get('/dashbord', controller.dashbord);



module.exports = router;