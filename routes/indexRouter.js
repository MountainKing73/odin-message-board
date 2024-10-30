const { Router } = require("express");
const messagesController = require("../controllers/messagesController");
const indexRouter = Router();

indexRouter.get("/", messagesController.messagesAllGet);
indexRouter.get("/new", messagesController.messagesNewGet);
indexRouter.get("/message/:msgId", messagesController.messagesOneGet);
indexRouter.post("/new", messagesController.messagesNewPost);

module.exports = indexRouter;
