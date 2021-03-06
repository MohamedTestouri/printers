/***** GLOBAL IMPORTS *****/
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
methodeOverride = require("method-override");
require('dotenv').config();

/***** UTILS CONFIG *****/
app.use(methodeOverride("_method"));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


/***** DATABASE CONNECTION *****/
//mongoose.connect("mongodb://localhost:27017/printer");
 mongoose.connect(process.env.DATABASE, {
     useNewUrlParser: true,
     useUnifiedTopology: true
 });

/***** ROUTES IMPORT *****/
const userRoutes = require('./src/routes/userRoutes');
const clientRoutes = require('./src/routes/clientRoutes');
const printerRoutes = require('./src/routes/printerRoutes');
const consommableRoutes = require('./src/routes/consommableRoutes');

/***** ROUTES *****/
app.use('/user', userRoutes);
app.use('/client', clientRoutes);
app.use('/printer', printerRoutes);
app.use('/consommable', consommableRoutes);

//The 404 Route (ALWAYS Keep this as the last route)
// app.get('*', function (req, res) {
//     res.status(404).send('what???');
// });
module.exports = app;