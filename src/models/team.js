// server/src/models/team.js

const Team = `
type Team {
  id: Int!
  name: String
  color: String
  seed: Int
  rating: Float
  games: [Game] @relation(name: "PLAYED_IN", direction:"OUT")
  event: Event @relation(name: "MEMBER_OF", direction:"OUT")
  roster: [Player] @relation(name: "PLAYED_FOR", direction:"IN")
  points: [Point] @relation(name: "SCORED", direction:"OUT")
  }
  
  type GameTeam {
  id: Int!
  name: String
  color: String
  seed: Int
  rating: Float
  scored: Int
  }
  `;

export default Team;
