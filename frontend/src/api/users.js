import { BASE_URL } from "../constants";

//api to authenticate user and get JWT token .
const authenticateUser = (username, password) => {
  const url = `${BASE_URL}/users/login`;
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((result) => {
      if (result.ok) return result.json();
      else return undefined;
    })
    .catch((e) => undefined);
};

export { authenticateUser };
