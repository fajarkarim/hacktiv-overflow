var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser')
var logger = require('morgan');
var cors = require('cors')
require('dotenv').config()
// var passport = require('passport')
// var jwt = require('jsonwebtoken')

var index = require('./routes/index');
var users = require('./routes/users');
var questions = require('./routes/questions')
var answers = require('./routes/answers')
var questionvotes = require('./routes/questionvotes')
var answervotes = require('./routes/answervotes')

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/', index);
app.use('/api/users', users);
app.use('/api/questions', questions);
app.use('/api/answers', answers)
app.use('/api/q_votes', questionvotes)
app.use('/api/a_votes', answervotes)


module.exports = app;
