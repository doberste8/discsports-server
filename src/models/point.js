// server/src/models/point.js

const Point = `
type Point {
  id: Float!
  time: String
  game: Game! @relation(name: "MEMBER_OF", direction:"OUT")
  players: [Player] @relation(name: "PLAYED", direction:"IN")
  scored_by: Team @relation(name: "SCORED", direction:"IN")
  }
  `;

export default Point;
