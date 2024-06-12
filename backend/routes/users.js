const express = require("express");
const router = express.Router();
const { loginUser } = require("../controller/users");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  return loginUser(username, password)
    .then((token) => {
      return res.json({ token });
    })
    .catch((e) => {
      res.statusCode = 401;
      return res.json({ error: e });
    });
});

module.exports = router;
