const express = require('express');
const { json } = require('express');
const morgan = require('morgan');
const routes = require('./routes');

// initialize
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/v1', routes);

module.exports = app;