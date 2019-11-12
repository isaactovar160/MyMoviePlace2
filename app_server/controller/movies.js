


/** All Movies */
const movies = (req, res) => {
    res.render('index', {title: 'Movies' });
};

const annabelle = (req, res) =>{
    res.render('movies', {title: 'Annabelle'});
};
const conjuring = (req, res) => {
    res.render('movies', {title: 'The Conjuring'});
};
const it = (req, res) => {
    res.render('movies', {
        title: 'IT (1990)'
    });
};

const exorcista = (req, res) => { 
    res.render('movies', {title: 'El Exorcista'})
};

const insidious = (req, res ) => {
    res.render('movies', {title:'Insidious'})
};
const texas = (req, res)=> {
    res.render('movies', {
        title: 'Texas Chainsaw Massacre: The Beginning'
    })
}
const cabin_woods = (req, res) => {
    res.render('movies', {
        title: 'The Cabin in the Woods'
    })
}
const dead_silence = (req, res) => {
    res.render('movies', {
        title: 'Dead Silence'
    })
}
const the_nun = (req, res)=>{
    res.render('movies', {title:'The Nun'})
}

module.exports = {
    movies,
    annabelle,
    conjuring,
    it,
    exorcista,
    insidious,
    texas,
    the_nun,
    cabin_woods,
    dead_silence
};