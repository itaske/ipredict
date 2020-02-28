var createError = require('http-errors');
var express = require('express');
let cookieSession=require('cookie-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressReact=require('express-react-views');
const databaseConnection=require('./controllers/database').connect();

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let signupRouter=require('./routes/signup');
let loginRouter=require('./routes/login');
let accountRouter=require('./routes/account');
let predictRouter=require('./routes/predict');
let fixturesRouter=require('./routes/fixtures');
let logoutRouter=require('./routes/logout');
let scoresRouter=require('./routes/scores');
let editScoresRouter=require('./routes/editScores');
let scoreboardRouter=require('./routes/scoreboard');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.engine('jsx',expressReact.createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/** 
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24

}}));

*/
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
 }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'views/dashboard')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/dashboard/account',accountRouter);
app.use('/dashboard/predict',predictRouter);
app.use('/dashboard/fixtures',fixturesRouter);
app.use('/logout',logoutRouter);
app.use('/scores',scoresRouter);
app.use('/editScores',editScoresRouter);
app.use('/dashboard/scoreboard',scoreboardRouter);

/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
8*/
module.exports = app;
