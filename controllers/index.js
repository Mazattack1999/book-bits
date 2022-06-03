const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const singleReviewRoutes = require('./single-review-routes');
const myReviewRoutes = require('./my-review-routes');
const searchResultsRoutes = require('./search-results-routes');


router.use('/api', apiRoutes);
// router.use('/', homeRoutes);
// router.use('/review', singleReviewRoutes);
// router.use('/my-reviews', myReviewRoutes);
// router.use('/search-results', searchResultsRoutes);

// send 404 error if route does not exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;