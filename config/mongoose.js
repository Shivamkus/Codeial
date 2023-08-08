const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/codial_development');
mongoose.connect('mongodb://127.0.0.1:27017/codial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "error on connecting to Mongodb"));



db.once('open' ,function(){
    console.log('connected to the database :: mongodb');
});

module.exports = db;

