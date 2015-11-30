/// <reference path='../typings/tsd.d.ts' />

import * as Promise from "bluebird";
import * as pg from "pg";

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
  export function connect() {
    var dbURL: string = "postgres://ntran:dont@localhost/play_blog_sample";
    pg.connect(dbURL, function(err, client, done) {
      if (err) {
        console.log("Err = ")
      }
        client.query('SELECT * FROM \"CAT\"', function(err, result) {
            if (err) {
              console.log("The error =" +err);
            }
            console.log("This is the result" + result.rows[0].NAME);
        });
    });
  }
}
