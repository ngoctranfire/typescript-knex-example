import * as http from "http";
import * as url from "url";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";
import * as errorHandler from "errorhandler";

const app: express.Express = express();
//Configurations


app.get('/', function(req, res): void {
   res.send('Hello World!');
});

let server: http.Server = app.listen(3000, function (): void {
    var host: string = this.address().address;
    var port: number = this.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/hey', function(req: express.Request, res: express.Response): void {
    res.send('What the heck');
});
