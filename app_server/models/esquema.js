
const mongoose = require('mongoose');

const Moviesschema = mongoose.Schema ({
    title: String,
    year: Number,
    director: String,
    country: String,
    link_to_video: String,
    resume: String,
    link_to_movie:String,

});

module.exports = mongoose.model('Movies', Moviesschema);