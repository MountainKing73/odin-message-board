#!/usr/bin/env node

const { argv } = require("node:process");
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text varchar(1000),
  username varchar(255),
  added timestamp
);

INSERT INTO messages (text, username, added)
VALUES
('Hi there!', 'Amando', current_timestamp),
('Hello World', 'Charles', current_timestamp);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
    //connectionString: "postgresql://postgres:<password>@localhost:5439/message_board",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
