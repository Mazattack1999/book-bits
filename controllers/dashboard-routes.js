// Carolyn Hudson's code
const router = require("express").Router();
const { Review, User } = require("../models");
const withAuth = require("../utils/auth");

// GET all user reviews for dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const dbReviewData = await Review.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: {
        model: User,
        attribute: ['username']
      }
    });

    const reviews = dbReviewData.map((review) => review.get({ plain: true }));
    res.render("dashboard", { reviews, loggedIn: req.session.user_id });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET user review data to edit
router.get("/edit/:id", async (req, res) => {
  try {
    const dbReviewData = await Review.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!dbReviewData) {
      res.status(404).json({ message: "No review found with this id" });
      return;
    }
    const review = dbReviewData.get({ plain: true });
    console.log(review);
    res.render("edit-review", { review, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new review
router.get("/create", (req, res) => {
  res.render("create-review");
});

module.exports = router;