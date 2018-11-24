// server/src/models/player.js

const Player = `
type Player {
  id: Int!
  firstName: String!
  lastName: String!
  age: Int
  gender: String
  events: [Event] @cypher(statement: "WITH {this} as this MATCH (this)-[:PLAYED_FOR]->(:Team)-[:MEMBER_OF]->(e:Event) RETURN e")
  teams: [Team] @relation(name: "PLAYED_FOR", direction:"OUT")
  points: [Point] @relation(name: "PLAYED", direction:"OUT")
  }
  `;

export default Player;
