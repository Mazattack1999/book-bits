// Carolyn Hudson's code
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all comments
router.get("/", async (req, res) => {
    try { 
        const dbCommentData = await Comment.findAll({});

        res.json(dbCommentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET single comment
router.get("/:id", async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      where: { id: req.params.id },
    });
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new comment
router.post("/", withAuth, async (req, res) => {
  if (req.session) {
    try {
      const dbCommentData = await Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

//UPDATE comment
router.put("/:id", withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.update(
      {
        comment_text: req.body.comment_text,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (!dbCommentData) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE comment
router.delete("/:id", async (req, res) => {
  try {
    const dbCommentData = await Comment.destroy({
      where: { id: req.params.id },
    });
    if (!dbCommentData) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;