const router = require('express').Router();
const { User, Review, Book, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/users
router.get('/', async (req, res) => {
    try {
        // Access our User model and run .findAll() method
        const dbUserData = await User.findAll({
            attributes: { exclude: ['password'] }
        })

        res.json(dbUserData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET /api/users/1
router.get('/:id', async (req, res) => {
    try { 
        const dbUserData = await User.findOne({
            where: {
                id: req.params.id
            },
            attributes: { 
                exclude: ['password']
            },
            include: [
                {
                    model: Review,
                    attribues: ['id', 'book_title', 'review_text', 'star_rating' ]
                },
                {
                    model: Comment,
                    attributes: ['id', 'review_id', 'comment_text']
                }
            ]
        })

        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  });

module.exports = router;