const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');

// initializations

const app = express();

// settings

app.set('port', process.env.PORT || 8070);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// middlewares, functions which process before getting to the route

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(multer({dest: path.join(__dirname, 'public/img/uploads')}).single('image'));

// global variables

// routes

app.use(require('./routes/index'))

// static files

// start the server

app.listen(app.get('port'), () => {
	console.log('server on port ' + app.get("port"));
});