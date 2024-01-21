import { Sequelize } from 'sequelize';

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)


require('dotenv').config();

const host = 'br4zrzu3vulbsepz7tvg-mysql.services.clever-cloud.com'
const database = 'br4zrzu3vulbsepz7tvg'
const password = 'QNBgh5ZEsybZZ5l0XoWJ'
const username = 'u1qxeesr6dwlrgcf'

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',
  logging: false
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log(database)
    console.log(username)
    console.log(password)
    console.log(host)
    console.error('Unable to connect to the database:', error);
  }
}

export default connectDB