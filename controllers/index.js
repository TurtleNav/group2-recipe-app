const router = require("express").Router();
const viewRoutes = require("./viewRoutes");

router.use("/", viewRoutes);
module.exports = router;
