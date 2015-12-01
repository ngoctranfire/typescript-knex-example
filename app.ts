import * as http from "http";
import * as url from "url";
import * as path from "path";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";
import * as errorHandler from "errorhandler";
import {HBSTemplate} from "./template_engines/HandleBarsViewEngine";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as knex from "./models/db";
const app: express.Express = express();

//Declare new engine and pass in appropriate object
//In this case, the object was actually a json object that is handled by the engine
var hbs: HBSTemplate = new HBSTemplate(app, 'hbs', 'views');
hbs.configureEngine({
    defaultLayout: path.join(__dirname, 'views/layouts/default.hbs'),
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
});

//Router Configurations
import * as routes from "./routes/index";
app.use('/', routes);

//Middleware Configurations
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: any) => {
   var err = new Error('Not Found');
   err['status'] = 404;
   next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
   app.use((err: any, req: express.Request, res: express.Response, next: any) => {
       res.status(err['status'] || 500);
       res.render('error', {
           message: err.message,
           error: err
       });
   });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: any) => {
   res.status(err.status || 500);
   res.render('error', {
       message: err.message,
       error: {}
   });
});

module.exports = app;
