const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const bootcampRoutes = require("./bootcamp-routes.js");
const commentRoutes = require("./comment-routes.js");
const ratingRoutes = require("./rating-routes.js");


router.use("/users", userRoutes);
router.use("/bootcamps", bootcampRoutes);
router.use("/comments", commentRoutes);
router.use("/ratings", ratingRoutes);



module.exports = router;

