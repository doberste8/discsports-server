// server/src/controllers/test.js

import logger from '../config/logger';
import driver from '../config/db';

exports.get = (req, res) => {
  const query = `MATCH (n)
  RETURN n.id as id
  LIMIT $limit`;

  const params = { limit: (parseInt(req.query.limit, 10) || 100) };

  const session = driver.session();
  session.run(query, params)
    .then((result) => {
      session.close();
      result.records.forEach((record) => {
        logger.info(record.get('id'));
      });
      res.json(result);
    })
    .catch((error) => {
      logger.error(error);
      res.status(500).send(error);
    });
};
