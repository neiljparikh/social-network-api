const router = require('express').Router();

const { getUsers, getOneUser, createUser, updateUser, deleteUser } = require("../../controllers/userController")

router.route('/getUsers').get(getUsers)
router.route('/getOneUser/:id').get(getOneUser)
router.route('/createUser').post(createUser)
router.route('/updateUser/:id').post(updateUser)
router.route('/deleteUser/:id').delete(deleteUser)



module.exports = router;