const { Router } = require("express");

const postsController = require("../controllers/posts.controllers");

const routes = Router();

routes.get("/posts", postsController.list);

routes.get("/posts/:id", postsController.getById);

routes.post("/posts", postsController.create);

routes.put("/posts/:id", postsController.update);

routes.delete("/posts/:id", postsController.remove);

module.exports = routes;
