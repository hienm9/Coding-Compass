const router = require("express").Router();

const userRoutes = require("./user-routes.js");
// const bootcampRoutes = require("./bootcamp-routes.js");

router.use("/users", userRoutes);
// router.use("/bootcamps", bootcampRoutes);

module.exports = router;

