const express = require('express');
const router = express.Router();

const Movies = require('../../app_server/models/esquema');

router.post('/movies', async (req, res) => {
    const movies_post = new Movies({
        title: req.body.title,
        year: req.body.year,
        director: req.body.director,
        country: req.body.country,
        link_to_video: req.body.link_to_video,
        resume: req.body.resume,
        link_to_movie: req.body.link_to_movie
    });

    try {
        const movies = await movies_post.save();
        res.json(movies);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

// //route GET

router.get('/movies', async (req, res) => {
    try {
        const movies = await Movies.find();
        res.json(movies);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

router.get('/movies/:movie', async (req, res) => {
    try {
        const movie = await Movies.findById(req.params.movie);
        res.json(movie);
    } catch (error) {
        res.json({
            message: error
        });
    }
});
module.exports = router;
