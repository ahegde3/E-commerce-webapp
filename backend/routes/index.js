const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../utility/authMiddleware");

router.use("/products", authenticateToken, require("./products"));
router.use("/users", require("./users"));

// Default Routers
router.get("/", function (req, res) {
  res.json({
    status: "Server responding",
    time: req.body.startTimeEpoch,
  });
});

module.exports = router;
