// server/src/models/schema.js

import { makeExecutableSchema } from 'graphql-tools';
import { augmentSchema } from 'neo4j-graphql-js';
import Team from './team';
import Game from './game';
import Event from './event';
import Player from './player';
import Point from './point';
import teamResolvers from '../resolvers/team';
import gameResolvers from '../resolvers/game';
import eventResolvers from '../resolvers/event';
import playerResolvers from '../resolvers/player';
import pointResolvers from '../resolvers/point';

const Query = `
  type Query {
    Team(id: Int, name: String): [Team]
    Game(id: Int): [Game]
    Event(id: Int, name: String): [Event]
    Player(id: Int): [Player]
    Point(id: Float): [Point]
  }
  `;

const SchemaDefinition = `
  schema {
    query: Query
  }
`;

const typeDefs = [
  SchemaDefinition,
  Query,
  Team,
  Game,
  Event,
  Player,
  Point,
];

const resolvers = [
  teamResolvers,
  gameResolvers,
  eventResolvers,
  playerResolvers,
  pointResolvers,
];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const augmentedSchema = augmentSchema(schema);

export default augmentedSchema;
