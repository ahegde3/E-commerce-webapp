const jwt = require("jsonwebtoken");
const { fetchUserByUsername } = require("../model/users");

//should be stored in environment variable
const SECRET_KEY =
  "5e884898da28047151d0e56f8dc6292773603d0d6aabbddc3db81c6b1cde1887e8efc1a4de1200bc8a68ce29a9f26032";

//Authenticates a user with username and password and generates a JWT token.
const loginUser = async (username, password) => {
  if (!username || !password)
    throw new Error("Username and password are required");

  try {
    const userData = await fetchUserByUsername(username);
    console.log(userData);
    if (!userData) throw new Error("Invalid username ");

    if (password !== userData.password) {
      throw new Error("Invalid  password");
    }

    const token = jwt.sign({ id: userData.id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    return token;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = { loginUser };
