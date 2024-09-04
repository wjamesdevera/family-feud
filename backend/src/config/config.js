require("dotenv").config();

const config = {
  port: process.env.PORT || 8000,
  db: {
    uri: process.env.DB_URI,
  },
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = config;
