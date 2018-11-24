const recursionDepth = 4;

let query = `query {
  rec,
}`;

const fragment = `game {
  code,
  winner,
  rec,
}`;

for (let i = 0; i < recursionDepth; i += 1) {
  query = query.replace(/rec/, fragment);
}

console.log(query);
