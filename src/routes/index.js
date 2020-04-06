
const { Router } = require('express');
const router = Router();

// Index page route

router.get('/', (req, res) => {
    res.send('Index Page');
});

// Login page route

router.get('/login', (req, res) => {
    res.send('Login Page')
});

// signup page route
router.get('/signup', (req, res) => {
    res.send('Sign Up Page')
});

module.exports = router;