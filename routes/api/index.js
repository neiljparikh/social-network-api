//create router
const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes")
const userRoutes = require("./userRoutes")

// Define your API routes here
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);


module.exports = router;
