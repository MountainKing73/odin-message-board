const db = require("../db/queries");

async function messagesAllGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
}

async function messagesNewGet(req, res) {
  res.render("form");
}

async function messagesOneGet(req, res) {
  const { msgId } = req.params;
  const message = await db.getMessage(msgId);
  res.render("message", { message: message });
}

async function messagesNewPost(req, res) {
  await db.insertMessage(req.body.message, req.body.author);

  res.redirect("/");
}

module.exports = {
  messagesAllGet,
  messagesNewGet,
  messagesOneGet,
  messagesNewPost,
};
