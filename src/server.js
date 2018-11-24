// server/src/server.js

// modules =====================================================================
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import methodOverride from 'method-override';
import path from 'path';
import config from './config';
import logger from './config/logger';
import router from './routes';

const app = express();

// config =====================================================================
app.use(morgan('combined', { stream: logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../client/static')));
app.use(cors());

// set port & environment
const { app: { port } } = config;
const { env } = config;

// routes =====================================================================

app.use('/', router);

// start app ==================================================================
app.listen(port);
logger.info(`App listening on port ${port} in ${env} mode...`);

// expose app
export default app;
