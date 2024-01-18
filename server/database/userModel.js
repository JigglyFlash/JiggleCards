const { Pool } = require('pg');

const PG_URI =
  'postgres://ktafuabn:5vIl3msl7tOtM4UDyI8tgSSNCXtMNQyM@berry.db.elephantsql.com/ktafuabn';

const PG_URI2 =
  'postgres://tjvfrije:HvbPqmC0RtHg9DPG9te3zzHb05F9FKOC@arjuna.db.elephantsql.com/tjvfrije';
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
  pool,
};
