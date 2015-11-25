/// <reference path='../typings/tsd.d.ts' />

import * as Promise from "bluebird";
import * as pg from "pg";

Promise.promisifyAll(require("pg"));
Promise.promisifyAll(pg.Client);

export function connect() {
  var conString = "postgres://ntran:dont@localhost/play_blog_sample";
  pg.connect(conString)
    .spread(function(client: pg.Client, done) {
        client.query("Select * FROM CATS")
          .then( function(result) {
            console.log(result.rows);
          })
          .catch(function(err) {
            console.log("Error trying to get table cats");
          })
      }
    )
    .then(function(done){
      done();
    })
    .catch(function(err){
      console.log("error connecting to database");
    });

}
