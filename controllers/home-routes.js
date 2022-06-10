// Carolyn Hudson's code
const router = require("express").Router();
const { Review, User, Comment } = require("../models");

// GET all reviews for homepage
router.get("/", async (req, res) => {
  try {
    const dbReviewData = await Review.findAll({
      order: [['id', 'DESC']],
      include: [User],
    });
    const reviews = dbReviewData.map((review) => review.get({ plain: true }));
    res.render("home", {
      reviews,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// user login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("home");
});

// user signup
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("home");
});

// GET single user review
router.get("/review/:id", async (req, res) => {
  try {
    const dbReviewData = await Review.findOne({
      where: {
        id: req.params.id,
      },
      order: [[{model: Comment}, 'id', 'DESC']],
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    if (!dbReviewData) {
      res.status(404).json({ message: "No review found with this id" });
      return;
    }
    const review = dbReviewData.get({ plain: true });
    console.log(review);
    res.render("single-review", { review, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;