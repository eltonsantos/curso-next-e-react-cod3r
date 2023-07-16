require('dotenv').config();

const config = {
  BASE_URL: process.env.BASE_URL || "http://localhost:3000/api",
};

module.exports = config;