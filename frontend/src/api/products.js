import { BASE_URL } from "../constants";

//api to get all products.
const getAllProducts = () => {
  const token = localStorage.getItem("token");
  const url = `${BASE_URL}/products`;
  return fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      accept: "*/*",
    },
  })
    .then((result) => {
      console.log(result);
      if (result.ok) return result.json();
      else if (result.status === 401) throw new Error("Forbidden");
      else return undefined;
    })
    .catch((e) => undefined);
};

export { getAllProducts };
