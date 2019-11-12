


var express = require('express');
var router = express.Router();

const ctrlMain = require('../controller/main');
const ctrlMovies = require('../controller/movies');

// GET HomePage
router.get('/', ctrlMain.index);

//Movies
 router.get('/movies', ctrlMovies.movies);
 router.get('/movies/annabelle', ctrlMovies.annabelle)
 router.get('/movies/conjuring', ctrlMovies.conjuring)
 router.get('/movies/it', ctrlMovies.it)
 router.get('/movies/exorcista', ctrlMovies.exorcista)
 router.get('/movies/insidious', ctrlMovies.insidious)
 router.get('/movies/the_nun', ctrlMovies.the_nun)
 router.get('/movies/cabin_woods', ctrlMovies.cabin_woods)
 router.get('/movies/dead_silence', ctrlMovies.dead_silence)
 router.get('/movies/texas', ctrlMovies.texas)
 
module.exports = router;
