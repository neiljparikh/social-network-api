const router = require('express').Router();

const { getUsers } = require("../../controllers/userController")

router.route('/users').get(getUsers)

module.exports = router;