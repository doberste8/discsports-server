// server/src/routes/api.js

import express from 'express';
import logger from '../config/logger';
// import User from '../controllers/user';
import Team from '../controllers/team';
import Test from '../controllers/test';

const api = express.Router();

// middleware for all api requests
api.use((req, res, next) => {
  logger.debug('API');
  next();
});

api.route('/test').get(Test.get);

// api.route('/users').get(User.get);
// api.route('/users').post(User.post);

api.route('/teams').get(Team.get);
api.route('/teams').post(Team.post);

export default api;
