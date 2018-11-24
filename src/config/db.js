// server/src/config/db.js

import { v1 as neo4j } from 'neo4j-driver';
import config from '.';
// import logger from './logger';

const {
  db: {
    host,
    user,
    password,
  },
} = config;

const driver = neo4j.driver(
  host,
  neo4j.auth.basic(user, password),
  { disableLosslessIntegers: true },
);

export default driver;
