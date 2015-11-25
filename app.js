var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var HandleBarsViewEngine_1 = require("./template_engines/HandleBarsViewEngine");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var db_1 = require("./models/db");
var app = express();
//Declare new engine and pass in appropriate object
//In this case, the object was actually a json object that is handled by the engine
var hbs = new HandleBarsViewEngine_1.HBSTemplate(app, 'hbs', 'views');
hbs.configureEngine({
    defaultLayout: path.join(__dirname, 'views/layouts/default.hbs'),
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
});
//Router Configurations
var routes = require("./routes/index");
app.use('/', routes);
//Middleware Configurations
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
db_1.connect();
//catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
//# sourceMappingURL=app.js.map