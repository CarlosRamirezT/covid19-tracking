
const { Router } = require('express');
const router = Router();

// Index page route

router.get('/', (req, res) => {
    res.send('Index Page');
});

// Login page route

router.get('/login', (req, res) => {
    res.render('login.ejs', {
        message: req.flash('loginMessage')
    });
});

module.exports = router;