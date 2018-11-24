// server/src/controllers/team.js

import logger from '../config/logger';
import Team from '../models/team';

exports.get = (req, res) => {
  Team.find()
    .then((teams) => {
      res.json(teams);
    })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(err);
    });
};

exports.post = (req, res) => {
  const data = Object.assign({}, req.body);

  Team.create(data)
    .then((team) => {
      res.json(team);
    })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(err);
    });
};
