var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
var server = app.listen(3000, function () {
    var host = this.address().address;
    var port = this.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
app.get('/hey', function (req, res) {
    res.send('What the heck');
});
//# sourceMappingURL=app.js.map