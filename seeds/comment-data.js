const { Comment } = require("../models");

const commentData = [
  {
    review_id: 1,
    comment_text: "Amazing book!",
    user_id: 1,
  },
  {
    review_id: 2,
    comment_text: "Great read!",
    user_id: 2,
  },
  {
    review_id: 3,
    comment_text: "One of my favorites!",
    user_id: 3,
  },
  {
    review_id: 4,
    comment_text: "This one is a classic. Highly recommend.",
    user_id: 4,
  },
  {
    review_id: 3,
    comment_text: "So good! I couldn't put it down.",
    user_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
