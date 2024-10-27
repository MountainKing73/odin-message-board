const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => res.send("Get /new"));

module.exports = newRouter;
