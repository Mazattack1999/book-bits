const seedUsers = require("./user-data");
const seedBooks = require("./book-data");
const seedReviews = require("./review-data");
const seedComments = require("./comment-data");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("****DATABASE SYNCED****");

  await seedUsers();
  console.log("****USERS SEEDED****");

  await seedBooks();
  console.log("****POSTS SEEDED****");

  await seedReviews();
  console.log("****REVIEWS SEEDED****");

  await seedComments();
  console.log("****COMMENTS SEEDED****");

  process.exit(0);
};

seedAll();
