// server/src/models/event.js

const Event = `
type Event {
  id: Int!
  name: String!
  teams: [Team] @relation(name: "MEMBER_OF", direction:"IN")
  games: [Game] @relation(name: "MEMBER_OF", direction:"IN")
  }
  `;

export default Event;
