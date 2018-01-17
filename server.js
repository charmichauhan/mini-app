var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var assert = require('assert');
var engines = require('consolidate');
var ejs = require('ejs');
var mongoose = require('mongoose');
var React = require('react');
var app = express();
require('babel-core/register');
// view engine setup
app.set('views', path.join(__dirname, ''));
app.set('view engine', './index.html');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '')));

//mongoose.connect('mongodb://charmic:lanetteam1@ds153853.mlab.com:53853/testdata');
mongoose.connect('mongodb://localhost:27017/miniapp');
var mini = require('./models/model.js');

app.post('/data', function(req, res) {
    var test = new mini();
    // var fbResponse = JSON.parse(body);
    test.email = req.body.email;

    test.save(function(err,result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });

});

//---------------get Books

app.get('/data',function (req,res) {
    mini.find(function (err,test1) {
        if(err)
        {
            throw err;
        }
        res.send(test1);
    });
});

//------------------Delete Books

app.delete('/data/:id',function (req,res) {
    var query={_id:req.params.id};
    mini.remove(query,function (err,test1) {
        if(err)
        {
            console.log("# API delete Error",err);
        }
        res.json(test1);
    });
});

app.put('/data/:id',function (req, res) {
    var test = req.body ;
    var query = req.params.id;

    var update = {
        '$set':
            {
                email: test.email,

            }};

    var options = {new : true};
    mini.findOneAndUpdate(query, update, options, function (err, test2) {
        if(err){
            throw err;
        }
        res.json(test2)
    })
});

// catch 404 and forward to error handlers
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(4000,function (err) {
    if(err){
        return console.log(err);
    }
    console.log("API Server Is running on 4000");
});

module.exports = app;
