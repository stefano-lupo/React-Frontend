const BASE_URL = "http://localhost:8080";

export const getAccountById = (id) => {
  return fetch(`${BASE_URL}/account/${id}`)
    .then(resp => {
      console.log(resp)
      return resp.json()
    })
    .then(account => {
      console.log("Got account")
      console.log(account)
      return account;
    });
}