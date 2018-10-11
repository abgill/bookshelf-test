var knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'myguessablepassword',
      database : 'pg_test'
    },
    debug : true
 });

 module.exports = require('bookshelf')(knex);