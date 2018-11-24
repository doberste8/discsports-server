// server/src/models/game.js

const Game = `
type Game {
  id: Int!
  code: String
  time: String
  pullingId: Int
  winner(name: String): Team @relation(name: "WON", direction:"IN")
  event: Event @relation(name: "MEMBER_OF", direction:"OUT")
  children: [Game] @relation(name: "CHILD_OF", direction:"IN")
  teams(name: String): [Team] @relation(name: "PLAYED_IN", direction:"IN")
  score: [GameTeam] @cypher(statement: "WITH {this} as this MATCH (team)-[p:PLAYED_IN]->(this) RETURN team { .*, scored:p.scored } as team")
  points: [Point] @relation(name: "MEMBER_OF", direction:"IN")
  }
  `;

export default Game;
