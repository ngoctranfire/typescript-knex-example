/// <reference path='../typings/tsd.d.ts' />

import * as Promise from "bluebird";
import * as pg from "pg";
import * as client from "knex";

export module Database {
  export var knex: client = client({
    client: 'pg',
    connection:  {
      host: '127.0.0.1',
      user: 'my_user',
      password: 'new_password',
      database: 'typescript_blog_example'
    },
    pool: {
      min: 2,
      max: 10
    },
    debug: true,
  });

}
