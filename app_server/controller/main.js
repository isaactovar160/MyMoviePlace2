


/* GET homepage */
const index = (req, res) => {
    res.render('index', { 
        title: 'My Movie Place' ,
        pageHeader: {
            title: 'My Movie Place',
            strapline: 'My favorite scary movies'
        }
        

    
    });
};


module.exports = {
    index
};

