const {unlink} = require('fs-extra');
const Case = require('../models/case');
const path= require('path');
module.exports = (app, passport) => {

    // Index page routes
    // initial route for no signed users

    app.get('/', async(req,res)=>{
        const cases = await Case.find()
        res.render('index',{'cases': cases});
	});

    // Index page routes
    // initial route for signed users

    app.get('/user/:id', async(req, res) => {
        res.send('Index Page for signed users');
    });

    // Login page routes

    app.get('/login', async(req, res) => {
        res.render('login', {
            message: req.flash('loginMessage')
        });
    });

    const validate=passport.authenticate('local-login');
    console.log(validate) 
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/intermediate',
		failureRedirect: '/login',
		failureFlash: true
	}));

    // signup page routes

    app.get('/signup', (req, res) => {
		res.render('signup', {
			message: req.flash('signupMessage')
		});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/intermediate',
		failureRedirect: '/signup',
		failureFlash: true
	}));

    // intermediate page routes

    app.get('/intermediate', (req, res) => {
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

    app.get('/user/upload/:id', async(req, res) => {
        // res.render('upload', {
        // 	user: req.user
        // });
        res.render('upload');
    });

    app.post('/user/upload/:id', async(req, res) => {
        res.send('Upload Page');
    });

    // profile page routes

    app.get('/profile', (req, res) => {
        res.send('Profile Page')
    });

    // logout routes

    app.get('/logout', (req, res) => {
        res.send('Logout Page')
    });

    // map tracking routes

    app.get('/map', async(req, res) => {
        res.send('Map Page');
    });

    // case profile route

    app.get('/case/:id', async(req, res) => {
        res.send('Case Profile Page');
    });

    // case delete cases route

    app.get('/case/:id/delete', async(req, res) => {
        res.send('Case visualize and delete Page');
    });

    // case visualize and delete cases route

    app.get('/user/delete/case', async(req, res) => {
        res.send('Case visualize and delete Page');
    });

};