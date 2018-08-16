import { ACTION_TYPES } from '../actions/actionTypes';
import Account from '../records/Account';

const defaultState = new Account();

// NOTE: Reducers are passes THEIR SLICE of the state, not all of it
const account = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.UPDATED_ACCOUNT:
    case ACTION_TYPES.FETCHED_ACCOUNT:
      return payload;

    default: return state
  }
};

export default account;