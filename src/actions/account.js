import { ACTION_TYPES } from './actionTypes';
import * as AccountApi from '../api/account';


export const updateAccount = account => ({
  type: ACTION_TYPES.UPDATED_ACCOUNT,
  payload: account
});

export const getAccountById = id => {
  return dispatch => {
    AccountApi.getAccountById(id).then(account => {
      console.log("Dispatching:")
      console.log(account)
      dispatch(fetchedAccount(account))
    });
  }
};

const fetchedAccount = account => ({
  type: ACTION_TYPES.FETCHED_ACCOUNT,
  payload: account
});