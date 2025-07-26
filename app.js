require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
// const mongoose = require('mongoose');
const methodOverride = require('method-override');


// Middleware
const connectDB = require('./server/config/db')

const app = express();
const PORT = process.env.PORT || 1994;

connectDB();
app.use(methodOverride('_method'));

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', require('./server/routes/main'))

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
