const express = require('express');
const app = express();
const port = 5000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and scripts from pages into the layout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);

app.use('/', require('./routes'))


app.set('view engine', 'ejs');
app.set('views', './views');





app.listen(port, function(err){
 
    if(err){
        console.log('Error on running server:',err);
    }
    console.log('server is running on port:',port);
});
