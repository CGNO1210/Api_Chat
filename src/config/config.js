require('dotenv').config(); // this is important!
module.exports = {
    "development": {
        "username": process.env.DB_USERNAME || 'u1qxeesr6dwlrgcf',
        "password": process.env.DB_PASSWORD || 'QNBgh5ZEsybZZ5l0XoWJ',
        "database": process.env.DB_DATABASE || 'br4zrzu3vulbsepz7tvg',
        "host": process.env.DB_HOST || 'br4zrzu3vulbsepz7tvg-mysql.services.clever-cloud.com',
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};