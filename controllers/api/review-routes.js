const router = require('express').Router();
const { User, Review, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// GET api/reviews
router.get('/', async (req, res) => {

    try {
        // GET all reivews
        const dbReviewData = await Review.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })

        res.json(dbReviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// GET /api/reivews/:id
router.get('/:id', async (req, res) => {
    try { 
        // GET one post
        const dbReviewData = await Review.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'review_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        if (!dbReviewData) {
            res.status(404).json({ message: 'No review found with this id' });
            return;
        }
        res.json(dbReviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// CREATE /api/reivews
router.post('/', withAuth, async (req, res) => {

    try {
        // CREATE a review
        const dbReviewData = await Review.create({
            book_title: req.body.book_title,
            author: req.body.author,
            review_text: req.body.review_text,
            star_rating: req.body.star_rating,
            user_id: req.session.user_id
        })

        res.json(dbReviewData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


// UPDATE /api/reviews/:id
router.put('/:id', withAuth, async (req, res) => {
    try { 
        // UPDATE a review
        const dbReviewData = await Review.update(
            {
                book_title: req.body.book_title,
                author: req.body.author,
                review_text: req.body.review_text,
                star_rating: req.body.star_rating
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )

        if (!dbReviewData) {
            res.status(404).json({ message: 'No review found with this id' });
            return;
        }
        res.json(dbReviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// DELETE /api/reviews/:id
router.delete('/:id', async (req, res) => {
    try { 
        // DELETE one review by id
        const dbReviewData = await Review.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!dbReviewData) {
            res.status(404).json({ message: 'No review found with this id' });
            return;
        }
        res.json(dbReviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;