import Account from '../records/Account';

const BASE_URL = "http://localhost:8080";

export const getAccountById = (id) => {
  return fetch(`${BASE_URL}/account/${id}`)
    .then(resp => resp.json())
    .then(account => new Account({...account, id: null}));
}