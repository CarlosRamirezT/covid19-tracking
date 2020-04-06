const express = require('express');

// initializations

const app = express();

// settings

// middlewares

// required for passport

// routes

// static files

// start the server

app.listen(app.get('port'), () => {
	console.log('server on port ${3000}');
});