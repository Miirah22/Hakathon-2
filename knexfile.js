module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            database: 'Hakathon#2',
            user: 'postgres',
            password: 'admin',
        },
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds',
        }
    },
};