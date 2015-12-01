/// <reference path='../typings/tsd.d.ts' />

import * as Promise from "bluebird";
import * as pg from "pg";
import * as client from "knex";

// export function connect() {
//   var conString = "postgres://ntran:dont@localhost/play_blog_sample";
//   promisedPG.connect(conString)
//     .spread(function(client: pg.Client, done) {
//         client.query("Select * FROM CATS")
//           .then( function(result) {
//             console.log(result.rows);
//           })
//           .catch(function(err) {
//             console.log("Error trying to get table cats");
//           })
//       }
//     )
//     .then(function(done){
//       done();
//     })
//     .catch(function(err){
//       console.log("error connecting to database");
//     });
// }
export module Database {
  export var knex: client = client({
    client: 'pg',
    connection:  {
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

}
