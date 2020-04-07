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

    app.get('/user', isLoggedIn, async(req, res) => {
        const cases = await Case.find()
        res.render('index-signed',{'cases': cases});
    });

    // Login page routes
    
    app.get('/login', (req, res) => {
		res.render('login.ejs', {
			message: req.flash('loginMessage')
		});
    });
    
    const validate=passport.authenticate('local-login');
    console.log(validate) 

	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/user',
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
		successRedirect: '/index-singed',
		failureRedirect: '/signup',
		failureFlash: true
	}));

    // // intermediate page routes

    // app.get('/intermediate', isLoggedIn, (req, res) => {
	// 	res.render('intermediate', {
	// 		user: req.user
	// 	});
	// });

    // intermediate upload page routes

    // router.get('/intermediate/upload', (req, res) => {
    //     res.render('intermediate-upload', {
    // 		user: req.user
    // 	});
    // 	// res.render('intermediate-upload');
    // });

    // signed users cases upload

    app.use(function (err, req, res, next) {
        console.log('----------------- This is the invalid field ->', err.field)
        next(err)
      })

    app.get('/user/upload/:id', isLoggedIn, async(req, res) => {
        res.render('upload');
    });

    app.post('/user/upload/:id', isLoggedIn, async(req, res) => {
        const image = new Case();

        // victim's information
        
		image.name = req.body.name;
		image.age = req.body.age;
		image.date_start = req.body.date_start;
		image.address = req.body.address;
		image.sector = req.body.sector;
		image.city = req.body.city;
		image.province = req.body.province;
        image.country = req.body.country;
        
		 // victim contact's information

		image.contact_phone = req.body.contact_phone;

        // dissappearance information

        image.symptoms = req.body.symptoms;

        //infomarmacion de la imagen

		// image.filename = req.image.filename;
		// image.path = 'img/uploads/' + req.image.filename;
		// image.originalname = req.image.originalname;
		// image.mimetype = req.image.mimetype;
		// image.size = req.image.size;
        // image.createrId = req.body.creader;
        
        await image.save();
		res.redirect('/');
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

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}