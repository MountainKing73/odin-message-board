const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * from messages");
  return rows;
}

async function getMessage(id) {
  console.log("getMessage id: " + id);
  const { rows } = await pool.query("SELECT * from messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function insertMessage(text, username) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, current_timestamp)",
    [text, username],
  );
}

module.exports = { getAllMessages, getMessage, insertMessage };
