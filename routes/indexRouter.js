const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.get("/message/:msgId", (req, res) => {
  const { msgId } = req.params;
  res.render("message", { message: messages[msgId] });
});

indexRouter.post("/new", (req, res) => {
  console.log("message: " + req.body.message);
  console.log("author: " + req.body.author);
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = indexRouter;
