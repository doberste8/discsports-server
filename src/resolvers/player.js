// server/src/resolvers/player.js

import { neo4jgraphql } from 'neo4j-graphql-js';

const resolvers = {
  // entry point to GraphQL service
  Query: {
    Player(object, params, ctx, resolveInfo) {
      return neo4jgraphql(object, params, ctx, resolveInfo, false);
    },
  },
};

export default resolvers;
