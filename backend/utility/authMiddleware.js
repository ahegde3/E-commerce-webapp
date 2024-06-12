const jwt = require("jsonwebtoken");
const SECRET_KEY =
  "5e884898da28047151d0e56f8dc6292773603d0d6aabbddc3db81c6b1cde1887e8efc1a4de1200bc8a68ce29a9f26032";

// Middleware to verify the token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Get token from the 'Bearer <token>' format

  if (token == null) return res.sendStatus(401); // If no token, return Unauthorized

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // If token is invalid, return Forbidden

    req.user = user; // Attach the user object to the request
    next();
  });
}

module.exports = { authenticateToken };
