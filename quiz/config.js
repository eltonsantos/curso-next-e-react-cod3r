require('dotenv').config();

const config = {
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/api",
};

module.exports = config;