


/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'My Movie Place' });
};


module.exports = {
    index
};