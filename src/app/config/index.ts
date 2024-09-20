import dotenv from "dotenv";

// config dotenv
dotenv.config();

// export all env variable from this config
const config = {
  port: process.env.PORT || 5000,
  dbUrl: process.env.DB_URL,
  origin: process.env.ORIGINS,
};

export default config;
