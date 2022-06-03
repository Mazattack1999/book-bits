const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
const commentRoutes = require('./comment-routes');
const bookRoutes = require('./book-routes');

router.use('/users', userRoutes);
router.use('/review', reviewRoutes);
router.use('/comments', commentRoutes);
router.use('/book', bookRoutes);

module.exports = router;