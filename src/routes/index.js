
const { Router } = require('express');
const router = Router();

// Index page routes
// initial route for no signed users

router.get('/', async(req, res) => {
    res.send('Index Page for no signed users');
});

// Index page routes
// initial route for signed users

router.get('/user/:id', async(req, res) => {
    res.send('Index Page for signed users');
});

// Login page routes

router.get('/login', async(req, res) => {
	res.render('login', {
        message: false
    });
});

// signup page routes

router.get('/signup', (req, res) => {
    res.send('Sign Up Page')
});

// intermediate page routes

router.get('/intermediate', (req, res) => {
    res.send('Intermediate Page')
});

// intermediate upload page routes

// router.get('/intermediate/upload', (req, res) => {
//     res.render('intermediate-upload', {
// 		user: req.user
// 	});
// 	// res.render('intermediate-upload');
// });

// signed users cases upload

router.get('/user/upload/:id', async(req, res) => {
    // res.render('upload', {
	// 	user: req.user
	// });
	res.render('upload');
});

router.post('/user/upload/:id', async(req, res) => {
    res.send('Upload Page');
});

// profile page routes

router.get('/profile', (req, res) => {
    res.send('Profile Page')
});

// logout routes

router.get('/logout', (req, res) => {
    res.send('Logout Page')
});

// map tracking routes

router.get('/map', async(req, res) => {
    res.send('Map Page');
});

// case profile route

router.get('/case/:id', async(req, res) => {
    res.send('Case Profile Page');
});

// case delete cases route

router.get('/case/:id/delete', async(req, res) => {
    res.send('Case visualize and delete Page');
});

// case visualize and delete cases route

router.get('/user/delete/case', async(req, res) => {
    res.send('Case visualize and delete Page');
});

module.exports = router;