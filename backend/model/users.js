const fetchUserByUsername = async (username) => {
  if (!username) throw new Error("username is required");
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM user WHERE username = '${username}'`, (err, row) => {
      if (err) {
        reject(new Error("Failed to fetch users."));
      } else {
        resolve(row);
      }
    });
  });
};
module.exports = { fetchUserByUsername };
