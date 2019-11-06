// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // DBMS driver to use 
    connection: { // location or path of our db
      filename: './data/cardealer.db3'
    },
    useNullAsDefault: true, // required only for SQLite
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
