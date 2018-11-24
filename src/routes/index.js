// server/src/routes/index.js

// const path = require('path');
import express from 'express';
import graphqlHTTP from 'express-graphql';
import api from './api';
import graphqlSchema from '../models/schema';
import driver from '../config/db';

const router = express.Router();

// middleware
router.use((req, res, next) => {
  next();
});

// server routes ============================================================
router.use('/api', api);

router.use('/graphql', graphqlHTTP(req => ({
  schema: graphqlSchema,
  graphiql: true,
  context: { driver, req },
})));

// // frontend routes ==========================================================
// // route to handle all angular requests
// router.get('*', function(req, res) {
//     res.sendFile('index.html', {
//         root: path.join(__dirname, '../../../client/dist')
//     });
// });

export default router;
