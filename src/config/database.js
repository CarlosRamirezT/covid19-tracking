const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/covid19-tracking',{
    useNewUrlParser: true
})
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err));