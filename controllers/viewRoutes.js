const viewRouter = require("express").Router();

viewRouter.get("/", async (req, res) => {
  try {
    res.render("all");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = viewRouter;
