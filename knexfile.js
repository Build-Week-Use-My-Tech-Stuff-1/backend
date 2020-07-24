// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/usemytek.db3'
    },  
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },  seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },

    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }

};
