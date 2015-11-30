var pg = require("pg");
var Database;
(function (Database) {
    function connect() {
        var dbURL = "postgres://ntran:dont@localhost/play_blog_sample";
        pg.connect(dbURL, function (err, client, done) {
            if (err) {
                console.log("Err = ");
            }
            client.query('SELECT * FROM \"CAT\"', function (err, result) {
                if (err) {
                    console.log("The error =" + err);
                }
                console.log("This is the result" + result.rows[0].NAME);
            });
        });
    }
    Database.connect = connect;
})(Database = exports.Database || (exports.Database = {}));
//# sourceMappingURL=db.js.map