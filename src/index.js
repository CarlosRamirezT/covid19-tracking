const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer= require('multer');
const uuid= require('uuid/v4');
const {format} =require('timeago.js');
require('./config/database.js');

require('./config/passport')(passport);

// settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

// required for passport

app.use(session({
	secret: 'faztwebtutorialexample',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const storage= multer.diskStorage({
    destination: path.join(__dirname,'public/img/uploads'),
    filename: (req,file,cb,filename) =>{
        cb(null,uuid()+path.extname(file.originalname));
    }
});

app.use(multer({storage}).single('case'));

//global variables

app.use((req,res,next)=>{
    app.locals.format=format;
    next();
});

// routes

require('./routes/index.js')(app, passport);

// static files

app.use(express.static(path.join(__dirname, 'public')));

// start the server

app.listen(app.get('port'), () => {
	console.log('server on port ', app.get('port'));
});
