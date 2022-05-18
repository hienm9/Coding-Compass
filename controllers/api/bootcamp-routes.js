const router = require("express").Router();
const { User, Rating, Bootcamp, Comment } = require("../../models");

// get all bootcamps
router.get("/", (req, res) => {
  Bootcamp.findAll({
    attributes: ["id", "name", "bootcamp_url", "info"]
  })
    .then(dbBootcampData => res.json(dbBootcampData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one bootcamp
router.get("/:id", (req, res) => {
  Bootcamp.findOne({
    attributes: ["id", "name", "bootcamp_url", "info"],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Rating,
        attributes: ["id", "rating", "created_at"],
        include: {
          model: User,
          attributes: ["username"]
        }
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: User,
          attributes: ["username"]
        }
      }
    ]
  })
    .then(dbBootcampData => {
      if (!dbBootcampData) {
        res.status(404).json({ message: "No bootcamp found with this id" });
        return;
      }
      res.json(dbBootcampData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;