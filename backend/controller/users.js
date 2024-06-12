const jwt = require("jsonwebtoken");

//should be stored in environment variable
const SECRET_KEY =
  "5e884898da28047151d0e56f8dc6292773603d0d6aabbddc3db81c6b1cde1887e8efc1a4de1200bc8a68ce29a9f26032";

//Authenticates a user with username and password and generates a JWT token.
const loginUser = async (username, password) => {
  console.log(username, password);
  if (!username || !password)
    throw new Error("Username and password are required");

  if (username != "admin" || password !== "admin") {
    throw new Error("Invalid username or password");
  }

  //Note: Token should be generated using userId
  const token = jwt.sign({ username: username }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return token;
};

module.exports = { loginUser };
