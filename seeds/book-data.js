const { Book } = require("../models");

const bookData = [
  {
    title: "Hamlet",
    author: "William Shakespeare",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
