const fs = require("fs");

module.exports = {
  development: {
    username: "",
    password: "",
    database: "fintechsandpit_dev",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};
