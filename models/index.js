const User = require('./User');
const Review = require('./Review');
const Comment = require('./Comment');
const Book = require('./Book');

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Review.hasMany(Comment, {
    foreignKey: 'review_id'
});

Comment.belongsTo(Review, {
    foreignKey: 'review_id'
});

Review.hasOne(Book, {
    foreignKey: 'book_id'
});

Book.belongsTo(Review, {
    foreignKey: 'book_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Review, Comment, Book }