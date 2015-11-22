var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var hbsTemp = require("./template_engines/HandleBarsViewEngine");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var app = express();
var expressHbs = new hbsTemp.HBSTemplate(app, 'hbs', 'views');
expressHbs.configureEngine({
    defaultLayout: path.join(__dirname, 'views/layouts/default.hbs'),
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
});
var routes = require("./routes/index");
app.use('/', routes);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
exports = app;
//# sourceMappingURL=app.js.map