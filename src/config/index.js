// server/src/config/index.js

export default {
  env: process.env.NODE_ENV || 'development',
  app: {
    port: (process.env.PORT),
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
};
