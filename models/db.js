var client = require("knex");
var Database;
(function (Database) {
    Database.knex = client({
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: 'my_user',
            password: 'new_password',
            database: 'play_blog_sample'
        },
        pool: {
            min: 2,
            max: 10
        },
        debug: true,
    });
})(Database = exports.Database || (exports.Database = {}));
//# sourceMappingURL=db.js.map