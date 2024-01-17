const { Client } = require('pg');

// Connection URI format: postgresql://username:password@host:port/database
const dbUri = 'postgres://tjvfrije:HvbPqmC0RtHg9DPG9te3zzHb05F9FKOC@arjuna.db.elephantsql.com/tjvfrije';

const client = new Client({
  connectionString: dbUri,
});

const connectToDatabase = () => {
  return client.connect()
    .then(() => {
      console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
      console.error('Error connecting to PostgreSQL database:', err);
    });
};

const endDatabaseConnection = () => {
  client.end();
};

module.exports = {
  connectToDatabase,
  endDatabaseConnection,
  client,
};